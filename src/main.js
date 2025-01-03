import { createApp } from 'vue';

import App from './App.vue';

import { setupRouter } from './router';

import './assets/main.scss';
import 'virtual:uno.css';
// import '@unocss/reset/normalize.css';
// import '@unocss/reset/eric-meyer.css';
import '@unocss/reset/tailwind.css';

const app = createApp(App);
const router = setupRouter();
app.use(router);
app.mount('#app');
