import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from './router/index'
import storeData from './store/store.js'
import axios from 'axios';

Vue.config.productionTip = false;

Vue.filter('sortlength', function(text, length, suffix) {
    var sorted = (text.length > length) ? text.substring(0, length) + suffix : text
    return sorted;
});
Vue.use(Vuex);

//axios instance
var instance = axios.create({
    baseURL: 'http://enhakkore.rtgroup-rdc.com',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
});
Vue.prototype.$axios = instance;

//support vueSweetalert
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
Vue.use(VueSweetalert2);

//globals reusables components
Vue.component("dFooter", require("@/components/layouts/footer.vue").default);
Vue.component("dSearchBannerArea", require("@/components/widgets/search_banner_area.vue").default);

const store = new Vuex.Store(storeData);

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');