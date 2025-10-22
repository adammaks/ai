# Деплой точной копии дизайна ysaria.ru
Write-Host "🎨 Деплой точной копии дизайна ysaria.ru..." -ForegroundColor Green

# Переключаемся на ветку gh-pages
Write-Host "🌿 Переключаемся на ветку gh-pages..." -ForegroundColor Yellow
git checkout gh-pages

# Очищаем все файлы
Write-Host "🧹 Очищаем файлы..." -ForegroundColor Yellow
git rm -rf .

# Копируем точную копию дизайна ysaria.ru
Write-Host "🎨 Копируем точную копию дизайна ysaria.ru..." -ForegroundColor Yellow
Copy-Item "index-ysaria-copy.html" "index.html"

# Добавляем файлы
Write-Host "➕ Добавляем файлы в git..." -ForegroundColor Yellow
git add .

# Создаем коммит
Write-Host "💾 Создаем коммит..." -ForegroundColor Yellow
git commit -m "Deploy exact copy of ysaria.ru design with adammaksAI content"

# Отправляем ветку
Write-Host "🌐 Отправляем ветку gh-pages..." -ForegroundColor Yellow
git push origin gh-pages --force

# Возвращаемся на main
Write-Host "🔄 Возвращаемся на main..." -ForegroundColor Yellow
git checkout main

Write-Host "✅ Точная копия дизайна ysaria.ru задеплоена!" -ForegroundColor Green
Write-Host "🔗 Проверьте через 5 минут: https://adammaks.github.io/ai/" -ForegroundColor Cyan
Write-Host "🎨 Скопированные элементы из ysaria.ru:" -ForegroundColor Yellow
Write-Host "   • Точная структура навигации" -ForegroundColor White
Write-Host "   • Стиль карточек и секций" -ForegroundColor White
Write-Host "   • Цветовая схема и типографика" -ForegroundColor White
Write-Host "   • Процесс работы (4 этапа)" -ForegroundColor White
Write-Host "   • Тарифы (Light, Standard, VIP)" -ForegroundColor White
Write-Host "   • Форма обратной связи" -ForegroundColor White
Write-Host "   • Социальные ссылки" -ForegroundColor White
Write-Host "   • Мобильная адаптивность" -ForegroundColor White
