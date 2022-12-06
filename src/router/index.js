import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      // meta 放路由的資料地方
      meta: {
        title: '國立科技高中─校園社團介紹網'
      }
    },
    {
      path: '/guitar',
      name: 'guitar',
      component: () => import('../views/GuitarHistory.vue'),
      meta: {
        title: '吉他社社史'
      }
    },
    {
      path: '/guitar/events',
      name: 'guitar-events',
      component: () => import('../views/GuitarEvents.vue'),
      meta: {
        title: '吉他社近期活動公告'
      }
    },
    {
      path: '/guitar/teach',
      name: 'guitar-teach',
      component: () => import('../views/GuitarTeach.vue'),
      meta: {
        title: '吉他社教學內容'
      }
    },
    {
      path: '/prepare',
      name: 'prepare',
      component: () => import('../views/NotReady.vue'),
      // 路由別名
      // 除了 /prepare 定義的路徑以外，這些路徑也套用這個設定
      // 注意在這些路徑換頁時會被當作在同一個路由
      alias: [
        '/dance',
        '/baseball',
        '/badminton',
        '/soccer',
        '/scout'
      ],
      meta: {
        title: '準備中'
      }
    },
    {
      path: '/404',
      name: 'not-found',
      component: () => ('../views/NotFound.vue'),
      meta: {
        title: '404'
      }
    },
    {
      // 配對所有不在上面的路徑
      path: '/:catchAll(.*)',
      name: 'all',
      // 重新導向到 404
      redirect: '/404'
    }
  ]
})
// to 去哪裡
// from 從哪來
router.afterEach((to, from) => {
  document.title = to.meta.title
})
export default router
