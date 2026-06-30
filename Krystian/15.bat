@echo off
setlocal EnableDelayedExpansion

set /a n=1

for /f "delims=" %%F in ('dir /b /a-d /on') do (
    set "ext=%%~xF"
    ren "%%F" "!n!!ext!"
    set /a n+=1
)

endlocal