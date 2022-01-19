import Home from "@/components/mains/home.vue";
import Login from "@/components/pages/auth/login_page.vue";
import Register from "@/components/pages/auth/register_page.vue";


//public pages
import HomePage from "@/components/pages/public/home_page.vue";
import CategoriePage from "@/components/pages/public/categories_page.vue";
import ProductAddPage from "@/components/pages/public/product_add_page.vue";
import UserDash from "@/components/pages/public/user_dashboard.vue";
//sub pages tab
import UserIndex from "@/components/pages/public/user_dash/index.vue";
import UserOffers from "@/components/pages/public/user_dash/user_offers_tab.vue";
import UserMessages from "@/components/pages/public/user_dash/user_chat_tab.vue";
import UserProducts from "@/components/pages/public/user_dash/user_products_tab.vue";

//sub pages
import HomeProductDetail from "@/components/sections/subsections/product_detail_sub_section.vue";
const routes = [{
        path: '/',
        component: Home,
        name: 'home',
        children: [{
                path: '',
                component: HomePage,
                name: "HomePage"
            },
            {
                path: '/produit/detail',
                component: HomeProductDetail,
                name: 'details'
            },

            {
                path: '/categories',
                component: CategoriePage,
                name: 'categories'
            },
            {
                path: '/produit/poster',
                component: ProductAddPage,
                name: "product_post"
            },
            {
                path: '/mobiles/messages',
                component: UserMessages,
                name: 'm-messages'
            },
            {
                path: '/utilisateur/compte/',
                component: UserDash,
                name: "dashboard",
                children: [{
                        path: '',
                        component: UserIndex,
                        name: 'index'
                    },

                    {
                        path: '/offres',
                        component: UserOffers,
                        name: 'offers'
                    },
                    {
                        path: '/messages',
                        component: UserMessages,
                        name: 'messages'
                    },
                    {
                        path: '/produits',
                        component: UserProducts,
                        name: 'products'
                    },
                ]
            }
        ]
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