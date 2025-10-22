# Деплой дизайна в стиле Behance портфолио
Write-Host "🎨 Деплой дизайна в стиле Behance портфолио..." -ForegroundColor Green

# Переключаемся на ветку gh-pages
Write-Host "🌿 Переключаемся на ветку gh-pages..." -ForegroundColor Yellow
git checkout gh-pages

# Очищаем все файлы
Write-Host "🧹 Очищаем файлы..." -ForegroundColor Yellow
git rm -rf .

# Копируем новый дизайн в стиле Behance
Write-Host "🎨 Копируем дизайн в стиле Behance портфолио..." -ForegroundColor Yellow
Copy-Item "index-behance-style.html" "index.html"

# Добавляем файлы
Write-Host "➕ Добавляем файлы в git..." -ForegroundColor Yellow
git add .

# Создаем коммит
Write-Host "💾 Создаем коммит..." -ForegroundColor Yellow
git commit -m "Deploy Behance-inspired portfolio design with modern UI/UX"

# Отправляем ветку
Write-Host "🌐 Отправляем ветку gh-pages..." -ForegroundColor Yellow
git push origin gh-pages --force

# Возвращаемся на main
Write-Host "🔄 Возвращаемся на main..." -ForegroundColor Yellow
git checkout main

Write-Host "✅ Дизайн в стиле Behance портфолио задеплоен!" -ForegroundColor Green
Write-Host "🔗 Проверьте через 5 минут: https://adammaks.github.io/ai/" -ForegroundColor Cyan
Write-Host "🎨 Новые особенности:" -ForegroundColor Yellow
Write-Host "   • Современный дизайн в стиле Behance" -ForegroundColor White
Write-Host "   • Профессиональная типографика Space Grotesk" -ForegroundColor White
Write-Host "   • Геометрические элементы и анимации" -ForegroundColor White
Write-Host "   • Оранжевые акценты и градиенты" -ForegroundColor White
Write-Host "   • Glass-эффекты и современные карточки" -ForegroundColor White
Write-Host "   • Теги для проектов и профессиональная навигация" -ForegroundColor White
