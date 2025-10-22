# Деплой нового дерзкого дизайна в стиле Lusion.co
Write-Host "🚀 Деплой нового дизайна adammaksAI в стиле Lusion.co..." -ForegroundColor Green

# Переключаемся на ветку gh-pages
Write-Host "🌿 Переключаемся на ветку gh-pages..." -ForegroundColor Yellow
git checkout gh-pages

# Очищаем все файлы
Write-Host "🧹 Очищаем файлы..." -ForegroundColor Yellow
git rm -rf .

# Копируем новый дизайн
Write-Host "🎨 Копируем новый дерзкий дизайн..." -ForegroundColor Yellow
Copy-Item "index-lusion-style.html" "index.html"

# Добавляем файлы
Write-Host "➕ Добавляем файлы в git..." -ForegroundColor Yellow
git add .

# Создаем коммит
Write-Host "💾 Создаем коммит..." -ForegroundColor Yellow
git commit -m "Deploy bold Lusion.co inspired design with futuristic elements"

# Отправляем ветку
Write-Host "🌐 Отправляем ветку gh-pages..." -ForegroundColor Yellow
git push origin gh-pages --force

# Возвращаемся на main
Write-Host "🔄 Возвращаемся на main..." -ForegroundColor Yellow
git checkout main

Write-Host "✅ Новый дерзкий дизайн задеплоен!" -ForegroundColor Green
Write-Host "🔗 Проверьте через 5 минут: https://adammaks.github.io/ai/" -ForegroundColor Cyan
Write-Host "🎨 Новые особенности:" -ForegroundColor Yellow
Write-Host "   • Футуристический темный дизайн" -ForegroundColor White
Write-Host "   • Анимированная сетка и частицы" -ForegroundColor White
Write-Host "   • Неоновые эффекты и градиенты" -ForegroundColor White
Write-Host "   • Продвинутые анимации и переходы" -ForegroundColor White
Write-Host "   • Современная типографика Inter" -ForegroundColor White
Write-Host "   • Интерактивные элементы с эффектами" -ForegroundColor White
