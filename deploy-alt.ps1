# Альтернативный PowerShell скрипт деплоя
Write-Host "🚀 Альтернативный деплой adammaksAI..." -ForegroundColor Green

# Собираем проект
Write-Host "📦 Собираем проект..." -ForegroundColor Yellow
npm run build

# Создаем временную ветку для gh-pages
Write-Host "🌿 Создаем ветку gh-pages..." -ForegroundColor Yellow
git checkout --orphan gh-pages

# Очищаем все файлы
git rm -rf .

# Копируем собранные файлы
Write-Host "📁 Копируем собранные файлы..." -ForegroundColor Yellow
Copy-Item -Path "dist\*" -Destination "." -Recurse -Force

# Добавляем файлы
git add .
git commit -m "Deploy to GitHub Pages"

# Отправляем ветку
Write-Host "🌐 Отправляем ветку gh-pages..." -ForegroundColor Yellow
git push origin gh-pages --force

# Возвращаемся на main
git checkout main

Write-Host "✅ Деплой завершен!" -ForegroundColor Green
Write-Host "🔗 Проверьте: https://adammaks.github.io/ai/" -ForegroundColor Cyan
