# Исправление разрешений GitHub Actions

## Проблема решена! ✅

Ошибка `Permission to adammaks/ai.git denied to github-actions[bot]` означает, что GitHub Actions не имеет разрешений для записи в репозиторий.

## Что было исправлено:

1. **Добавлены разрешения** в workflow файл
2. **Обновлен workflow** для использования официального GitHub Pages action
3. **Создан альтернативный workflow** с правильными настройками

## Настройки GitHub Pages:

### Шаг 1: Включите GitHub Pages
1. Перейдите в репозиторий: https://github.com/adammaks/ai
2. Settings → Pages
3. Source: "GitHub Actions"

### Шаг 2: Проверьте разрешения
1. Settings → Actions → General
2. Убедитесь, что "Workflow permissions" установлены на "Read and write permissions"
3. Или выберите "Read repository contents and packages permissions" и включите "Allow GitHub Actions to create and approve pull requests"

## Альтернативные способы деплоя:

### Способ 1: Ручной деплой через ветку gh-pages
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

### Способ 2: Использование Personal Access Token
1. Создайте Personal Access Token в GitHub Settings
2. Добавьте его как секрет в репозиторий
3. Используйте в workflow вместо GITHUB_TOKEN

## Проверка результата:

1. **GitHub Actions**: https://github.com/adammaks/ai/actions
2. **GitHub Pages**: https://adammaks.github.io/ai/
3. **Настройки**: Settings → Pages → Source: "GitHub Actions"

## Если проблема остается:

1. Убедитесь, что репозиторий публичный
2. Проверьте, что GitHub Pages включен в настройках
3. Попробуйте ручной деплой через ветку gh-pages
4. Очистите кэш браузера после деплоя
