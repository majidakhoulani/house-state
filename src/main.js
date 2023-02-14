/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'
// firebase
// import { initializeApp } from "firebase/app";

// const firebaseConfig = {
//   apiKey: "AIzaSyAvGfqa-J8qjWX5Cc8R1Ku8BPY2woEh1ak",
//   authDomain: "museo-f7dc2.firebaseapp.com",
//   databaseURL: "https://museo-f7dc2.firebaseio.com",
//   projectId: "museo-f7dc2",
//   storageBucket: "museo-f7dc2.appspot.com",
//   messagingSenderId: "761451708850",
//   appId: "1:761451708850:web:40858aa8e7419d164ba4ab",
//   measurementId: "G-45VHXFWMEE"
// };

// const firebaseApp = initializeApp(firebaseConfig);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyBx9EZLDLIcPaPrRpEOLAr26Xr68tj8xXg",
  authDomain: "fir-test-439ba.firebaseapp.com",
  projectId: "fir-test-439ba",
  storageBucket: "fir-test-439ba.appspot.com",
  messagingSenderId: "2683276379",
  appId: "1:2683276379:web:a99892a2ee85e151aa837e",
  measurementId: "G-Y4QSTJBE5Q"
};

// Initialize Firebase
const app1 = initializeApp(firebaseConfig);
const analytics = getAnalytics(app1);

const app = createApp(App)

registerPlugins(app)

app.mount('#app')
