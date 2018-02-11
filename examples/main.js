import Vue from 'vue';
import App from './app.vue';
import viewshare from '../src/index';
// import locale from '../src/locale/lang/en-US';
// import locale from '../src/locale/lang/zh-CN';

Vue.use(viewshare)

// 开启debug模式
Vue.config.debug = true;

new Vue({
    el: '#app',
    render: h => h(App)
});
