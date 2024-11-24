import { createApp } from 'vue';
import App from './App.vue';
import router from './router';  // Correct import path for the router

createApp(App)
  .use(router)  // Use the router
  .mount('#app');
