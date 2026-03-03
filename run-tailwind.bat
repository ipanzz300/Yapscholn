@echo off
:: Pindah ke folder tempat file .bat ini berada (otomatis)
cd /d "%~dp0"

echo ==========================================
echo [Yapscholn] Menjalankan Build Tailwind v4
echo ==========================================

:: Cek apakah npx tersedia
where npx >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Sistem Mas belum ada Node.js/NPM.
    echo Silakan install dulu di https://nodejs.org/
    pause
    exit /b
)

echo Sedang memproses CSS...
call npx tailwindcss -i src/input.css -o css/style.css --minify

if %ERRORLEVEL% EQU 0 (
    echo.
    echo [BERHASIL] File css/style.css sudah diupdate!
) else (
    echo.
    echo [ERROR] Gagal menjalankan Tailwind.
)

echo.
echo Klik tombol apa saja untuk menutup...
pause
