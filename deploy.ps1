# PowerShell скрипт для быстрого деплоя на GitHub Pages
Write-Host "🚀 Начинаем деплой adammaksAI на GitHub Pages..." -ForegroundColor Green

# Проверяем статус git
Write-Host "📋 Проверяем статус git..." -ForegroundColor Yellow
git status

# Добавляем все изменения
Write-Host "➕ Добавляем изменения..." -ForegroundColor Yellow
git add .

# Создаем коммит
Write-Host "💾 Создаем коммит..." -ForegroundColor Yellow
git commit -m "Fix GitHub Pages deployment - update base path configuration"

# Отправляем на GitHub
Write-Host "🌐 Отправляем на GitHub..." -ForegroundColor Yellow
git push origin main

Write-Host "✅ Деплой завершен! Проверьте GitHub Actions и сайт через несколько минут." -ForegroundColor Green
Write-Host "🔗 Ссылка: https://adammaks.github.io/ai/" -ForegroundColor Cyan
