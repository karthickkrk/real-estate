@echo off
set PATH=%PATH%;"C:\Program Files\Git\bin"
git pull origin main --allow-unrelated-histories
git push -u origin main