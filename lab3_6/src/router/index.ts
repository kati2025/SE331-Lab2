import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UserLayoutView from '../views/user/UserLayoutView.vue'
import UserProfileView from '../views/user/UserProfileView.vue'
import UserPostsView from '../views/user/UserPostsView.vue'

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
        }
      ]
    }
  ],
})

export default router