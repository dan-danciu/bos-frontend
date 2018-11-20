const Home = () => import('./components/HomeCalendar.vue');
const GoogleAuth = () => import('./components/GoogleAuth.vue');

export const routes = [
  { path: '',
    component: Home,
    name: 'home'
  },
  { path: '/login',
    component: GoogleAuth,
    name: 'login'
  }
]
