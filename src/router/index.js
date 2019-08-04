import Vue from 'vue'
import Router from 'vue-router'
import Hello from '../components/Hello.vue'
import Hi from '../components/Hi.vue'
import Hi1 from '../components/Hi1.vue'
import Hi2 from '../components/Hi2.vue'

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
            path: '/Hi',
            component: Hi,
            //子路由配置
            children: [
                { path: '/',name: 'Hi', component: Hi },
                { path: 'hi1',name: 'hi1', component: Hi1 },
                { path: 'hi2',name: 'hi2', component: Hi2 }

            ]
        }
    ]
})
