import Home from './components/Home'
import Menu from './components/Menu'
import Admin from './components/Admin'
import Login from './components/Login'
import Register from './components/Register'
import About from './components/about/About'
import noPage from './components/404'
// 二级路由
import Contact from './components/about/Contact'
import History from './components/about/History'
import OrderingGuide from './components/about/OrderingGuide'
import Delivery from './components/about/Delivery'
// 三级路由
import Person from './components/about/contact/Person'
import Phone from './components/about/contact/Phone'

export const routes = [{
    path: '/',
    components: {
        default: Home,
        'orderingGuide': OrderingGuide,
        'delivery': Delivery,
        'history': History
    },
    name: 'homeLink'
  },
  {
    path: '/menu',
    component: Menu,
    name: 'menuLink'
  },
  {
    path: '/admin',
    component: Admin,
    name: 'adminLink',
    // beforeEnter: (to, from, next) => {
    //   // 路由独享的守卫
    //   if (to.path == '/login' || to.path == '/register') {
    //     next()
    //   }else {
    //     alert('请登录！')
    //     router.push('/login')
    //   }
    // }
  },
  {
    path: '/login',
    component: Login,
    name: 'loginLink'
  },
  {
    path: '/register',
    component: Register,
    name: 'registerLink'
  },
  {
    path: '/about',
    component: About,
    name: 'aboutLink',
    redirect: '/about/contact',
    children: [{
        path: '/about/contact',
        component: Contact,
        name: 'contactLink',
        children: [{
            path: '/about/contact/pserson',
            component: Person,
            name: 'personLink'
          },
          {
            path: '/about/contact/phone',
            component: Phone,
            name: 'phoneLink'
          }
        ]
      },
      {
        path: '/about/history',
        component: History,
        name: 'historyLink'
      },
      {
        path: '/about/orderingGuide',
        component: OrderingGuide,
        name: 'orderingGuideLink'
      },
      {
        path: '/about/delivery',
        component: Delivery,
        name: 'deliveryLink'
      }
    ]
  },
  {
    path: '/404',
    component: noPage,
    name: 'noPageLink'
  },
  {
    path: '*',
    redirect: '/404'
  }
]
