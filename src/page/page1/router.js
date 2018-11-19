import Vue from 'vue';
import Router from 'vue-router';
import mod1 from './component/mod1.vue';
import mod2 from './component/mod2.vue';

Vue.use(Router);

export default new Router({
    routes:[
        {
            path: '/',
            name: 'mod1',
            component:mod1
        },
        {
            path: '/mod2',
            name: 'mod2',
            component:mod2
        }
    ]
})