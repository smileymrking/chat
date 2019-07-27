const auth = [
  {
    path: '/auth',
    redirect: '/login',
    component: () => import('../../views/auth/Layout'),
    children: [
      {
        name: 'login',
        path: '/login',
        meta: { auth: false },
        component: () => import('../../views/auth/Login')
      },
      {
        name: 'register',
        path: '/register',
        meta: { auth: false },
        component: () => import('../../views/auth/Register')
      }
    ]
  }
]

export default auth
