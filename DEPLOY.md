# Инструкции по настройке GitHub Pages

## Шаги для деплоя на GitHub Pages:

### 1. Создание репозитория
1. Перейдите на GitHub.com
2. Нажмите "New repository"
3. Название: `adammaksai` (или любое другое)
4. Сделайте репозиторий публичным
5. НЕ добавляйте README, .gitignore или лицензию (они уже есть)

### 2. Загрузка кода
```bash
# Инициализация git (если еще не сделано)
git init

# Добавление всех файлов
git add .

# Первый коммит
git commit -m "Initial commit: adammaksAI portfolio with cosmic theme"

# Подключение к GitHub репозиторию
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Загрузка в main ветку
git branch -M main
git push -u origin main
```

### 3. Настройка GitHub Pages
1. Перейдите в Settings вашего репозитория
2. Найдите раздел "Pages" в левом меню
3. В разделе "Source" выберите "GitHub Actions"
4. Сохраните настройки

### 4. Проверка деплоя
- GitHub Actions автоматически запустится при push в main
- Проверьте статус в разделе "Actions" репозитория
- После успешного деплоя сайт будет доступен по адресу:
  `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME`

### 5. Обновление сайта
При каждом push в main ветку сайт будет автоматически обновляться.

## Альтернативный способ (ручной деплой):
```bash
npm run deploy
```

Это создаст ветку `gh-pages` и загрузит туда собранный сайт.
