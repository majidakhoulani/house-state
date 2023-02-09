/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
// import VueAnimateOnScroll from 'vue3-animate-onscroll';

import AOS from 'aos'
import 'aos/dist/aos.css'
import { loadFonts } from './webfontloader'
import vuetify from './vuetify'
import pinia from '../store'
import router from '../router'
//import axios from 'axios'
import {VueAxios,axios } from './axios'
import i18n from '@/i18n'

export function registerPlugins (app) {
  loadFonts()
  app
    .use(vuetify)
    .use(router)
    .use(pinia)
    .use(VueAxios, axios)
    .use(i18n)
    .use(VueSweetalert2)
    // .use(VueAnimateOnScroll)
    .use(AOS)
}
