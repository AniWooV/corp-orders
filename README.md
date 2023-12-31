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

### REST-API endpoints [:8000]
*Базовый адрес*: <адрес сервера>/api/
*Админ-панель*: <адрес сервера>/api/admin/
>Сотрудники
- **GET:** `/employees/` - получить список всех сотрудников
- **GET:** `/employees/{id}/` - получить информацию о сотруднике по его `id`
- **POST:** `/employees/` - добавить нового сотрудника
- **DELETE:** `/employees/{id}/` - удалить информацию о сотруднике по его `id`
- **PUT:** `/employees/{id}.` - обновить информацию о сотруднике по его `id`
- **PATCH:** `/employees/{id}.` - обновить информацию о сотруднике по его `id`

>Блюда
- **GET:** `/dishes/` - получить список всех блюд
- **GET:** `/dishes/{id}/` - получить информацию о блюде по его `id`
- **POST:** `/dishes/` - добавить новое блюдо
- **DELETE:** `/dishes/{id}/` - удалить информацию о блюде по его `id`
- **PUT:** `/dishes/{id}.` - обновить информацию о блюде по его `id`
- **PATCH:** `/dishes/{id}.` - обновить информацию о блюде по его `id`

>Заказы
- **GET:** `/orders/` - получить список всех заказов
- **GET:** `/orders/{id}/` - получить информацию о заказе по его `id`
- **POST:** `/orders/` - добавить новый заказ
- **DELETE:** `/orders/{id}/` - удалить информацию о заказе по его `id`
- **PUT:** `/orders/{id}.` - обновить информацию о заказе по его `id`
- **PATCH:** `/orders/{id}.` - обновить информацию о заказе по его `id`

### Функционал web-приложения [:3000]
*Базовый арес*: <адрес сервера>/
- Выбор блюда из меню
- Выбор сотрудника, на чье имя будет оформляться заказ
- Выбор даты, на которую будет оформлен заказ
- Формирования заказа
- Режим "мне повезет"

### Стек технологий
- React.JS
- React Redux
- Bootstrap
- Python
- Django
- DRF
