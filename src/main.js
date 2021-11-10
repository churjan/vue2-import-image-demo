import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import '@/apis';

Vue.config.productionTip = false;

Vue.mixin({
  computed: {
    publicPath() {
      return this.$store.state.publicPath;
    },
  },
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
