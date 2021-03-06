// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue';
import App from './App';
import fastClick from 'fastclick';
import router from './router';
import VueAwesomeSwiper from 'vue-awesome-swiper';

import 'style/css/reset.css';
import 'style/css/border.css';
import 'style/css/iconfont.css';
import 'swiper/dist/css/swiper.css';

Vue.config.productionTip = false;
fastClick.attach(document.body);
Vue.use(VueAwesomeSwiper);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
});
