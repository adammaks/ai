# Ручной деплой через ветку gh-pages
Write-Host "🚀 Ручной деплой adammaksAI через gh-pages..." -ForegroundColor Green

# Собираем проект
Write-Host "📦 Собираем проект..." -ForegroundColor Yellow
npm run build

# Создаем ветку gh-pages
Write-Host "🌿 Создаем ветку gh-pages..." -ForegroundColor Yellow
git checkout --orphan gh-pages

# Очищаем все файлы
Write-Host "🧹 Очищаем файлы..." -ForegroundColor Yellow
git rm -rf .

# Копируем собранные файлы
Write-Host "📁 Копируем собранные файлы..." -ForegroundColor Yellow
Copy-Item -Path "dist\*" -Destination "." -Recurse -Force

# Добавляем файлы
Write-Host "➕ Добавляем файлы в git..." -ForegroundColor Yellow
git add .

# Создаем коммит
Write-Host "💾 Создаем коммит..." -ForegroundColor Yellow
git commit -m "Deploy to GitHub Pages"

# Отправляем ветку
Write-Host "🌐 Отправляем ветку gh-pages..." -ForegroundColor Yellow
git push origin gh-pages --force

# Возвращаемся на main
Write-Host "🔄 Возвращаемся на main..." -ForegroundColor Yellow
git checkout main

Write-Host "✅ Ручной деплой завершен!" -ForegroundColor Green
Write-Host "🔗 Проверьте через 5 минут: https://adammaks.github.io/ai/" -ForegroundColor Cyan
Write-Host "📋 Настройки GitHub Pages: Settings → Pages → Source: 'Deploy from a branch' → 'gh-pages'" -ForegroundColor Yellow
