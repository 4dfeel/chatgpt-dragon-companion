# 龙娘桌面陪伴与定制启动面板

把桌面龙娘与 ChatGPT Dragon 启动动画、动态壁纸放在一起，方便朋友下载使用。维护与整合：4dfeel。本项目为社区整合，并非 OpenAI 官方产品。

![桌面龙娘](companion/assets/readme/banner.png)

## 下载使用

前往本仓库 **Releases** 下载 `Dragon-Companion-Windows-x64.zip`，完整解压到本地可写目录。双击 `Start-Dragon.cmd` 同时启动桌面龙娘和启动面板。也可以分别运行 `companion/DragonGirl.exe`、`launcher/Launch.exe`。

适用 Windows 10/11 x64，启动面板需要 .NET Framework 4.8 与正常媒体组件。请先安装、登录并确认官方客户端能正常使用。首次使用启动面板前，请保存工作并完整退出官方客户端，然后从本包启动。

龙娘会读取你自己电脑上的已有账户和用量资料；本包不附带维护者的账号、配置或统计数据。无需向朋友索要登录凭据。

## 收录版本

- 桌面龙娘：1.5.0，本地 144Hz 跟随适配；源码另含额度提醒改动及其测试。发行包使用已有的 144Hz 构建，未声称包含源码中的所有后续改动。
- 启动面板：34.16.11-chatgpt-26.1029，适配当时的 Windows 客户端 26.1029.7803.0。

客户端前端更新可能影响壁纸兼容性。本包包含 34.16.11 的输入框底栏修复。此整合未做全新电脑实机验收。

## 源码与构建

- `companion/`：桌面宠物源码、原始说明与素材。需要 Node.js 24+；在此目录运行 `npm ci`，先运行 `node scripts/fetch-reference-audio.mjs` 准备经过哈希校验的测试音效，再运行 `npm run check`、`npm test`；构建使用 `npm run package:win`。详见该目录原始 README。
- `launcher/community-v34/`：启动动画与壁纸源码。Windows PowerShell 5.1 下运行 `Build.ps1 -MediaRoot <完整发行包中的launcher目录> -OutputDirectory <新的输出目录>`。构建会验证媒体清单。
- `Start-Dragon.cmd`：便携发行包的统一入口；源码下载不含所需可执行程序，请使用 Releases。

## 来源与授权说明

桌面龙娘来自 [InhamiRei/Codex-DragonGirl](https://github.com/InhamiRei/Codex-DragonGirl)，作者 **Hey、小怪兽**。启动面板基于 [HanwenZhang-George/codex-startup-animation](https://github.com/HanwenZhang-George/codex-startup-animation) 社区实现，参考项目 [mytjxs/codex-startup-animation](https://github.com/mytjxs/codex-startup-animation)，并收录 4dfeel 的本地适配。

保留上游署名、字体许可、音频来源和 SOURCE-PROVENANCE。不同代码、角色、音视频与字体的权利归各自权利人；本整合不额外授予这些内容的开源或商业许可，使用与再分发须遵循各自原有条款。
