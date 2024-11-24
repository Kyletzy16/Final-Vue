import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from '../views/LoginPage.vue';
import ProfilePage from '../views/ProfilePage.vue';
import ShowcasePage from '../views/ShowcasePage.vue';
import ContactPage from '../views/ContactPage.vue';
import CreativePage from '../views/CreativePage.vue';

const routes = [
  { path: '/login', name: 'Login', component: LoginPage },
  { path: '/portfolio/profile', name: 'Profile', component: ProfilePage },
  { path: '/portfolio/showcase', name: 'Showcase', component: ShowcasePage },
  { path: '/portfolio/contact', name: 'Contact', component: ContactPage },
  { path: '/portfolio/creative', name: 'Creative', component: CreativePage },
  { path: '/:catchAll(.*)', redirect: '/login' }, // Default route for unknown paths
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
  