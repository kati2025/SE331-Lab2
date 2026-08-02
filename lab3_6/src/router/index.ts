import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UserLayoutView from '../views/user/UserLayoutView.vue'
import UserProfileView from '../views/user/UserProfileView.vue'
import UserPostsView from '../views/user/UserPostsView.vue'
import NotFoundView from '../views/NotFoundView.vue'
import UserEditView from '../views/user/UserEditView.vue'
import nProgress from 'nprogress'
import 'nprogress/nprogress.css'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/user/:id',
      name: 'user-layout',
      component: UserLayoutView,
      props: true,
      children: [
        {
          path: '',
          name: 'user-profile',
          component: UserProfileView,
          props: true
        },
        {
          path: 'posts',
          name: 'user-posts',
          component: UserPostsView,
          props: true
        },
        {
          path: 'edit',
          name: 'user-edit',
          component: UserEditView,
          props: true
        }
      ]
    },
    {
      path: '/404/:resource',
      name: '404-resource',
      component: NotFoundView,
      props: true
    },
    {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component: NotFoundView
    }
  ],
})
router.beforeEach(() => {
  nProgress.start()
})

router.afterEach(() => {
  nProgress.done()
})
export default router