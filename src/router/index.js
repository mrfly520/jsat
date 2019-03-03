import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/HelloFromVux'
import ListView from '@/components/ListView'
import SearchBox from '@/components/SearchBox'
import AddView from '@/components/AddView'
import DetailView from '@/components/DetailView'
import Video from '@/components/Video'
import Pre from '@/components/Previewer'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/List',
      name: 'ListView',
      component: ListView
    },
    {
      path: '/Search',
      name: 'SearchBox',
      component: SearchBox
    },
    {
      path: '/Add',
      name: 'AddView',
      component: AddView
    },
    {
      path: '/Detail',
      name: 'DetailView',
      component: DetailView
    },
    {
      path: '/Pre',
      name: 'Pre',
      component: Pre
    }, {
      path: '/Video',
      name: 'Video',
      component: Video
    }
  ]
})
