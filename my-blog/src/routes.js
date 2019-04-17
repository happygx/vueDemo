import AddBlog from './components/AddBlog'
import ShowBlog from './components/ShowBlog'
import Blog from './components/Blog'

export default [{
    path: '/',
    component: ShowBlog,
    name: 'showBlog'
  },
  {
    path: '/addblog/:id',
    component: AddBlog,
    name: 'addBlog'
  },
  {
    path: '/blog/:id',
    component: Blog,
    name: 'blog'
  },
]
