import { createApp } from 'vue';
import App from './App.vue';
import "./assets/css/global.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { createPinia } from 'pinia';

createApp(App).use(createPinia).mount('#app')


import "bootstrap/dist/js/bootstrap.js";

