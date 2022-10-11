import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import Column from '../views/ColumnDetail.vue'
import Article from '../views/ArticleDetail.vue'
import Edit from '../views/EditArticle.vue'
import Account from '../views/AccountView/index.vue'
import Login from '../views/AccountView/LoginView.vue'
import SignIn from '../views/AccountView/SignInView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/column',
      name: 'column',
      component: Column
    },
    {
      path: '/article',
      name: 'article',
      component: Article
    },
    {
      path: '/edit',
      name: 'edit',
      component: Edit
    },
    {
      path: '/account',
      component: Account,
      children: [
        { path: '', name: 'accountHome', component: Login }, // "/account 下显示 Login 组件中的内容"
        { path: 'login', name: 'login', component: Login },
        { path: 'signin', name: 'signin', component: SignIn }
      ]
    },
    {
      path: '/edit',
      component: Edit
    }
  ]
})

export default router
