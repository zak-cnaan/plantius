import Vue from 'vue';
import App from './App.vue';
import * as firebase from 'firebase';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import '@babel/polyfill';

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    vuetify,
    render: h => h(App),
    created () {
        firebase.initializeApp({
            apiKey: "AIzaSyABqWdewLqSjmtjizjiNXe8ovFoq6BUCjk",
            authDomain: "plantius-d3869.firebaseapp.com",
            databaseURL: "https://plantius-d3869.firebaseio.com",
            projectId: "plantius-d3869",
            storageBucket: "plantius-d3869.appspot.com",
            messagingSenderId: "89266876218",
            appId: "1:89266876218:web:001bcdfaa61a57eafdea03"
        })
    }
}).$mount('#app');
