import Vue from 'vue'
import Router from 'vue-router'
import NotFoundComponent from '@/components/NotFoundComponent'
import MainApp from '@/components/MainApp'
import SelectPenumpang from '@/components/SelectPenumpang'
import BrowseData from '@/components/BrowseData'
import KursViewer from '@/components/KursViewer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: MainApp,
      children: [
        // browse data cd [INCOMPLETE]
        {
          path: 'cd',
          component: BrowseData,
          props: (route) => ({ title: 'Customs Declaration', doctype: 'cd' })
        },
        {
          path: 'kurs',
          component: KursViewer
        },
        {
          path: 'penumpang',
          component: SelectPenumpang
        }
      ]
    },
    // 404 route
    {
      path: '*',
      component: NotFoundComponent
    }
  ]
})
