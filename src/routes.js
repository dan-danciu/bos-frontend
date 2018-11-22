const Home = () => import('./components/HomeCalendar.vue')
const GoogleAuth = () => import('./components/GoogleAuth.vue')
const UserProfile = () => import('./components/UserProfile.vue')
const AllUsers = () => import("./components/AllUsers.vue")

export const routes = [
  { path: '',
    component: Home,
    name: 'home',
    meta: { requiresAuth: true }
  },
  { path: '/login',
    component: GoogleAuth,
    name: 'login'
  },
  { path: '/user',
    component: UserProfile,
    name: 'user',
    meta: { requiresAuth: true }
  },
  { path: '/allusers',
    component: AllUsers,
    name: 'allusers',
    meta: { requiresAuth: true }
  },
  { path: '*',
    redirect: {name: 'home'}
  }
]
