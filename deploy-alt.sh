#!/bin/bash

# Альтернативный скрипт деплоя для GitHub Pages
echo "🚀 Альтернативный деплой adammaksAI..."

# Собираем проект
echo "📦 Собираем проект..."
npm run build

# Создаем временную ветку для gh-pages
echo "🌿 Создаем ветку gh-pages..."
git checkout --orphan gh-pages

# Очищаем все файлы
git rm -rf .

# Копируем собранные файлы
echo "📁 Копируем собранные файлы..."
cp -r dist/* .

# Добавляем файлы
git add .
git commit -m "Deploy to GitHub Pages"

# Отправляем ветку
echo "🌐 Отправляем ветку gh-pages..."
git push origin gh-pages --force

# Возвращаемся на main
git checkout main

echo "✅ Деплой завершен!"
echo "🔗 Проверьте: https://adammaks.github.io/ai/"
