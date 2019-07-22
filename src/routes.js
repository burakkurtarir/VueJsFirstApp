import listBlogs from './components/listBlogs.vue';
import blogDetail from './components/blogDetail.vue';

export default [
  { path: '/', component: listBlogs },
  { path: '/blogDetail/:id', component: blogDetail }
]
