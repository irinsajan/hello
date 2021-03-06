
import Vue from 'vue'
import VueRouter from 'vue-router';
import SliderView from './components/SliderView.vue';
import ResultView from './components/ResultView.vue';

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', name: 'Slider', component: SliderView },
    { path: '/result', name: 'Result', component: ResultView }
  ]
});