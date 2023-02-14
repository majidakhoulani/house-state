// Composables
import { createRouter, createWebHistory } from 'vue-router'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/HomeView.vue'),
      },
      {
        path: '/property',
        name: 'Property',
        component: () => import(/* webpackChunkName: "property" */ '@/views/PropertyView.vue'),
      },
      {
        path: '/cart',
        name: 'cart',
        component: () => import(/* webpackChunkName: "cart" */ '@/views/CartView.vue'),
      },
      {
        path: "/auth",
        name: 'Auth',
        component: () => import("../views/AuthView.vue"),
        meta: { requiresAuth: true }

      },
      {
        path: "/log-in",
        name: 'LogIn',
        component: () => import("../views/LoginView.vue"),
        // meta: { requiresAuth: true }

      },
      {
        path: "/sign-in",
        name: 'SignIn',
        component: () => import("../views/SginInView.vue"),
        // meta: { requiresAuth: true }

      },
    ],
  },
]

const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL),
  history: createWebHistory(process.env.NODE_ENV === "production" ? "/house-state/" : "/"),

  routes,
})
const getCurrentUser = () => {
  return new Promise(( resolve, reject ) =>{
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user) => {
        removeListener();
        resolve(user)
      },
      reject
    )
  })
}

router.beforeEach( async (to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)){
    if (await getCurrentUser()){
      next();
    } else {
      alert("You dont't have access");
      next('/');
    }
  } else {
    next();
  }
});

export default router
