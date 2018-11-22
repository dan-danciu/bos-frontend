const Home = () => import('./components/HomeCalendar.vue')
const GoogleAuth = () => import('./components/GoogleAuth.vue')
const UserProfile = () => import('./components/UserProfile.vue')
import { store } from './store/index'

export const routes = [
  { path: '',
    component: Home,
    name: 'home',
    meta: { requiresAuth: true },
    beforeEnter (to, from, next) {
      if (store.state.auth.id_token) {
        next()
      } else {
        next('/login')
      }
    }
  },
  { path: '/login',
    component: GoogleAuth,
    name: 'login'
  },
  { path: '/user',
    component: UserProfile,
    name: 'user'
  }
]
