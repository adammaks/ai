# Деплой простой версии React приложения
Write-Host "🚀 Деплой простой версии adammaksAI..." -ForegroundColor Green

# Создаем папку dist
if (!(Test-Path "dist")) {
    New-Item -ItemType Directory -Name "dist"
}

# Копируем простую версию
Write-Host "📝 Копируем простую версию..." -ForegroundColor Yellow
Copy-Item "index-simple.html" "dist/index.html"

# Создаем папку src в dist
if (!(Test-Path "dist/src")) {
    New-Item -ItemType Directory -Name "dist/src"
}

# Копируем React файлы
Copy-Item "src/App-simple.jsx" "dist/src/App-simple.jsx"
Copy-Item "src/main-simple.jsx" "dist/src/main-simple.jsx"

# Создаем простой package.json для сборки
$packageJson = @"
{
  "name": "adammaksai-simple",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "build": "echo 'Simple build completed'"
  }
}
"@

$packageJson | Out-File -FilePath "dist/package.json" -Encoding UTF8

# Добавляем изменения в git
Write-Host "📋 Добавляем изменения в git..." -ForegroundColor Yellow
git add .

# Создаем коммит
Write-Host "💾 Создаем коммит..." -ForegroundColor Yellow
git commit -m "Deploy simple React version"

# Отправляем на GitHub
Write-Host "🌐 Отправляем на GitHub..." -ForegroundColor Yellow
git push origin main

Write-Host "✅ Простая версия задеплоена!" -ForegroundColor Green
Write-Host "🔗 Проверьте через 5 минут: https://adammaks.github.io/ai/" -ForegroundColor Cyan
