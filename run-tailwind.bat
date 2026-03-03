@echo off
cd /d "c:\laragon\www\slicingyapschln"
.\node_modules\.bin\tailwindcss.cmd -i src/input.css -o css/style.css --minify
pause
