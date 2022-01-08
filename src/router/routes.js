import Home from "@/components/mains/home.vue";
import Login from "@/components/pages/auth/login_page.vue";
import Register from "@/components/pages/auth/register_page.vue";


//public pages
import HomePage from "@/components/pages/public/home_page.vue";
import CategoriePage from "@/components/pages/public/categories_page.vue";
const routes = [{
        path: '/',
        component: Home,
        name: 'home',
        children: [{
            path: '',
            component: HomePage,
            name: "HomePage"
        }, {
            path: '/categories',
            component: CategoriePage,
            name: 'categories'
        }]
    },
    {
        path: '/login',
        component: Login,
        name: 'login'
    },

    {
        path: '/login',
        component: Register,
        name: 'register'
    },

];
export default routes;