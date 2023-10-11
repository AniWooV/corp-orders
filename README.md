# corp-orders
*Сервис для заказа корпоративной еды*

## React-приложение
>Для запуска должен быть установлен node.js >v18.18.0 и npm >v9.8.1

1. Перейдите в дирректорию [/corp-orders](corp-orders) и установите необходимые пакеты: `npm install`.
2. Теперь можно запустить приложение: `npm start`.

## Django-приложение
>Для запуска требуются python >v.3.10.12

1. Прежде всего, необходимо настроить виртуальное окружение:
    1.1 Сначала создадим его: `python3 -m venv .venv`
    1.2 Далее активируем его: `source <путь до папки/.venv/bin/activate>` на Linux или `source .venv\Scripts\activate>` на ~~Windows~~
    1.3 Когда окружение установлено, можно скачать все необходимые зависимости: `python3 pip install -r requirements.txt`.
2. Также необходимо настроить БД:
    2.1 Создадим миграции: `python3 manage.py makemigrations`.
    2.2 Применим миграции: `python3 manage.py migrate`
3. Создадим пользователя с ролью **admin** для доступа к *админ-панеле*: `python3 manage.py createsuperuser`
4. Теперь можно запустить приложение: `python3 manage.py runserver`

### REST-API endpoints
- 
- 
- 

### Функционал web-приложения
- 
- 
- 

### Стек технологий
- 
- 
- 
