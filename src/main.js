import Vue from 'vue';
import App from './App.vue';
import './assets/style/main.css';
import './assets/style/main1.scss';
require('./components/components.js');
import router from './assets/js/routes.js';
new Vue({
    router,
    el: '#handle',
    render: h => h(App)
})
