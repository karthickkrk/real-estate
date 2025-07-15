@echo off
set PATH=%PATH%;"C:\Program Files\Git\bin"
git add .
git commit -m "Resolve merge conflict"
git push -u origin main