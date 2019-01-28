import Vue from 'vue'
import Router from 'vue-router'
import BasicIndex from '@/components/navMain/mainComponents/BasicIndex'
import BasicLayout from '@/components/navMain/mainComponents/BasicLayout'
import BasicContainer from '@/components/navMain/mainComponents/BasicContainer'
import BasicCheckbox from '@/components/navMain/mainComponents/BasicCheckbox'
import BasicRadio from '@/components/navMain/mainComponents/BasicRadio'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'index',
      component: BasicIndex
    },
    {
      path: '/BasicLayout',
      name: 'BasicLayout',
      component: BasicLayout
    }, {
      path: '/BasicContainer',
      name: 'BasicContainer',
      component: BasicContainer
    }, {
      path: '/BasicCheckbox',
      name: 'BasicCheckbox',
      component: BasicCheckbox
    }, {
      path: '/BasicRadio',
      name: 'BasicRadio',
      component: BasicRadio
    }
  ]
})
