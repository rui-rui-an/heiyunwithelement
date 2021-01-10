import Vue from 'vue'
import vueRouter from 'vue-router'
import findMusic from '../components/findMusic'
import musicMV from '../components/musicMV'
import recommendMusic from '../components/recommendMusic'
import playmusic from '../components/playmusic'
import playMV from '../components/playMV'

Vue.use(vueRouter)

let router = new vueRouter({
    routes:[
        {
            path:'/',
            redirect:'/recommendMusic'
        },
        {
            path:'/findMusic',
            component:findMusic
        },
        {
            path:'/musicMV',
            component:musicMV
        },
        {
            path:'/recommendMusic',
            component:recommendMusic
        },
        {
            path:'/playmusic',
            component:playmusic
        },
        {
            path:'/playMV',
            component:playMV
        }
    ]
})

export default router