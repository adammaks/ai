# Деплой исправленной версии для GitHub Pages
Write-Host "🚀 Деплой исправленной версии adammaksAI..." -ForegroundColor Green

# Переключаемся на ветку gh-pages
Write-Host "🌿 Переключаемся на ветку gh-pages..." -ForegroundColor Yellow
git checkout gh-pages

# Очищаем все файлы
Write-Host "🧹 Очищаем файлы..." -ForegroundColor Yellow
git rm -rf .

# Копируем исправленную версию
Write-Host "📁 Копируем исправленную версию..." -ForegroundColor Yellow
Copy-Item "index-github.html" "index.html"

# Добавляем файлы
Write-Host "➕ Добавляем файлы в git..." -ForegroundColor Yellow
git add .

# Создаем коммит
Write-Host "💾 Создаем коммит..." -ForegroundColor Yellow
git commit -m "Deploy fixed version for GitHub Pages"

# Отправляем ветку
Write-Host "🌐 Отправляем ветку gh-pages..." -ForegroundColor Yellow
git push origin gh-pages --force

# Возвращаемся на main
Write-Host "🔄 Возвращаемся на main..." -ForegroundColor Yellow
git checkout main

Write-Host "✅ Исправленная версия задеплоена!" -ForegroundColor Green
Write-Host "🔗 Проверьте через 5 минут: https://adammaks.github.io/ai/" -ForegroundColor Cyan
Write-Host "📋 Убедитесь, что в Settings → Pages выбран Source: 'Deploy from a branch' → 'gh-pages'" -ForegroundColor Yellow
