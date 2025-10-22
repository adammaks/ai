# Диагностика проблем с GitHub Pages

## Возможные причины отказа:

### 1. GitHub Actions не запустился
- Проверьте: https://github.com/adammaks/ai/actions
- Если нет workflow, значит есть проблема с файлом .github/workflows/deploy.yml

### 2. GitHub Actions запустился, но упал
- Откройте последний workflow в Actions
- Проверьте логи на ошибки
- Частые ошибки: неправильные пути, проблемы с зависимостями

### 3. GitHub Pages не настроен
- Перейдите в Settings → Pages
- Source должен быть: "GitHub Actions" или "Deploy from a branch"
- Если выбрано "Deploy from a branch", выберите ветку "gh-pages"

### 4. Репозиторий приватный
- GitHub Pages работает только с публичными репозиториями
- Убедитесь, что репозиторий публичный

### 5. Неправильный base path
- В vite.config.js должен быть base: '/ai/'
- Проверьте, что пути в собранных файлах правильные

## Решения:

### Решение 1: Тестовый деплой
```powershell
.\test-deploy.ps1
```

### Решение 2: Ручной деплой через ветку gh-pages
```bash
npm run build
git checkout --orphan gh-pages
git rm -rf .
cp -r dist/* .
git add .
git commit -m "Deploy to GitHub Pages"
git push origin gh-pages --force
git checkout main
```

### Решение 3: Проверка настроек
1. Откройте https://github.com/adammaks/ai/settings/pages
2. Убедитесь, что Source: "Deploy from a branch"
3. Branch: "gh-pages" (или "main" если используете GitHub Actions)

## Проверка результата:
- Подождите 5-10 минут после деплоя
- Очистите кэш браузера (Ctrl+F5)
- Проверьте консоль браузера на ошибки
