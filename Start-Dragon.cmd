@echo off
setlocal
cd /d "%~dp0"
if not exist "companion\DragonGirl.exe" goto missing
if not exist "launcher\Launch.exe" goto missing
start "" /d "%~dp0companion" "%~dp0companion\DragonGirl.exe"
start "" /d "%~dp0launcher" "%~dp0launcher\Launch.exe"
exit /b 0
:missing
echo Please download and fully extract the Windows x64 release ZIP.
echo Source downloads do not contain the executable applications.
pause
exit /b 1
