# Быстрый тестовый деплой
Write-Host "🚀 Тестовый деплой adammaksAI..." -ForegroundColor Green

# Создаем простую тестовую версию
Write-Host "📝 Создаем тестовую версию..." -ForegroundColor Yellow

# Создаем папку dist если её нет
if (!(Test-Path "dist")) {
    New-Item -ItemType Directory -Name "dist"
}

# Копируем тестовый файл
Copy-Item "test.html" "dist/index.html"

# Проверяем git статус
Write-Host "📋 Проверяем git статус..." -ForegroundColor Yellow
git status

# Добавляем изменения
Write-Host "➕ Добавляем изменения..." -ForegroundColor Yellow
git add .

# Создаем коммит
Write-Host "💾 Создаем коммит..." -ForegroundColor Yellow
git commit -m "Add test version for GitHub Pages"

# Отправляем на GitHub
Write-Host "🌐 Отправляем на GitHub..." -ForegroundColor Yellow
git push origin main

Write-Host "✅ Тестовый деплой завершен!" -ForegroundColor Green
Write-Host "🔗 Проверьте через 5 минут: https://adammaks.github.io/ai/" -ForegroundColor Cyan
