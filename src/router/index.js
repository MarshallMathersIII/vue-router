import Vue from 'vue'
import Router from 'vue-router'
import Hello from '../components/Hello.vue'
import Hi from '../components/Hi.vue'


Vue.use(Router)

//路由配置
export default new Router({
    routes: [
        {
            path: '/',
            name: 'Hello',
            component: Hello
        },
        {
            path: '/hi',
            name: 'Hi',
            component: Hi
        }
    ]
})
