import test from 'node:test';
import assert from 'node:assert/strict';
import { AlertTracker, normalizeQuota } from '../src/core/quota.js';

const quota = (used, reset = 1900000000) => normalizeQuota({ rateLimits: {
  primary: { usedPercent: used, windowDurationMins: 300, resetsAt: reset },
} });

test('5 小时额度逐档提醒、恢复后不重复，新周期重新提醒', () => {
  let tracker = new AlertTracker();
  for (const level of [60, 70, 80, 90, 95]) {
    assert.equal(tracker.evaluate('a', quota(level - 0.1), 20).length, 0);
    const result = tracker.evaluate('a', quota(level), 20);
    assert.equal(result.length, 1);
    assert.ok(result[0].text.includes(`${level}%`));
    tracker = new AlertTracker([...tracker.seen]);
    assert.equal(tracker.evaluate('a', quota(level), 20).length, 0);
  }
  assert.equal(tracker.evaluate('a', quota(50), 20).length, 0);
  assert.equal(tracker.evaluate('a', quota(100), 20).length, 0);
  assert.equal(tracker.evaluate('a', quota(60, 1900000001), 20).length, 1);
});

test('跨档合并且拒绝过期数据', () => {
  const tracker = new AlertTracker();
  assert.equal(tracker.evaluate('a', { ...quota(95), capturedAt: 0 }, 20).length, 0);
  assert.equal(tracker.evaluate('a', quota(91), 20).length, 1);
  assert.equal(tracker.evaluate('a', quota(80), 20).length, 0);
  assert.equal(tracker.evaluate('a', quota(95), 20).length, 1);
  assert.equal(tracker.evaluate('b', quota(60), 20).length, 1);
});
