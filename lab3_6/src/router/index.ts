import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UserLayoutView from '../views/user/UserLayoutView.vue'
import UserProfileView from '../views/user/UserProfileView.vue'
import UserPostsView from '../views/user/UserPostsView.vue'
import NotFoundView from '../views/NotFoundView.vue'
import UserEditView from '../views/user/UserEditView.vue'
import nProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { useEventStore } from '@/stores/event'
import UserService from '@/services/UserService'

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
      beforeEnter: (to) => {
        const id = parseInt(to.params.id as string)
        const eventStore = useEventStore()
        
        return UserService.getUser(id)
          .then((response) => {
            eventStore.setEvent(response.data)
          })
          .catch((error) => {
            if (error.response && error.response.status === 404) {
              return {
                name: '404-resource',
                params: { resource: 'user' }
              }
            }
          })
      },
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
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(savedPosition)
        }, 300) 
      })
    } else {
      return { top: 0 }
    }
  }
})

router.beforeEach(() => {
  nProgress.start()
})

router.afterEach(() => {
  nProgress.done()
})

export default router