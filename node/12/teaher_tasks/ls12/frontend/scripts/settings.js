const menuItems = [
  { href: 'index.html', text: 'Головна', meta: { requireAuth: false } },
  {
    href: 'products/list.html',
    text: 'Продукти',
    meta: { requireAuth: false },
  },
  {
    href: 'users/list.html',
    text: 'Користувачі',
    id: 'users-link',
    meta: { requireAuth: true },
  },
  {
    href: 'users_types/list.html',
    text: 'Типи користувачів',
    meta: { requireAuth: true },
  },
  {
    href: 'test/loadingOnScrollTest.html',
    text: 'Тест завантаження при скролінгу',
    meta: { requireAuth: false },
  },
  {
    href: 'auth/login.html',
    text: 'Вхід',
    id: 'auth-link',
    meta: { requireAuth: false },
  },
]
