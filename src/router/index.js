import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import TopicNav from '@/components/topic/topic-nav'
import Info from '@/components/topic/info'
import Login from '@/components/login/login'
import newTopic from '@/components/topic/newTopic'
const router=new Router({
    mode:'history',
    routes:[
        {
            path:'/',
            component:TopicNav
        },
        {
            path:'/topic/:id',
            name: 'info',
            component:Info
        },
        {
            path:'/login',
            component:Login
        },
        {
            path:'/newTopic',
            component:newTopic
        }
    ]
})

export default router