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

echo Sedang memantau perubahan file (Mode Watch Aktif)...
echo (Jangan tutup jendela ini selama Mas masih ngoding ya!)
echo.
call npx tailwindcss -i src/input.css -o css/style.css --watch

if %ERRORLEVEL% NEQ 0 (
    echo.
    echo [ERROR] Gagal menjalankan Tailwind.
)

echo.
echo Klik tombol apa saja untuk menutup...
pause
