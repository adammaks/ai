#!/bin/bash

# Скрипт для быстрого деплоя на GitHub Pages
echo "🚀 Начинаем деплой adammaksAI на GitHub Pages..."

# Проверяем статус git
echo "📋 Проверяем статус git..."
git status

# Добавляем все изменения
echo "➕ Добавляем изменения..."
git add .

# Создаем коммит
echo "💾 Создаем коммит..."
git commit -m "Fix GitHub Pages deployment - update base path configuration"

# Отправляем на GitHub
echo "🌐 Отправляем на GitHub..."
git push origin main

echo "✅ Деплой завершен! Проверьте GitHub Actions и сайт через несколько минут."
echo "🔗 Ссылка: https://adammaks.github.io/ai/"
