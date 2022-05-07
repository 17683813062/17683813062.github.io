import { createApp } from 'vue';
import App from './App.vue';

import TDesign from 'tdesign-mobile-vue';

import Vant from 'vant';
import 'vant/lib/index.css';

import router from "./router";
import store from './store/index';

import vue3videoPlay from "vue3-video-play";
import "vue3-video-play/dist/style.css";

const app = createApp(App);
app.use(TDesign);
app.use(Vant);
app.use(router);
app.use(store);
app.use(vue3videoPlay);
app.mount('#app');
// router.isReady().then(()=>{

// })
