//1. routes komponenseinek importálása
import Fooldal from "../components/routes/Fooldal.vue";
import Users from "../components/routes/Users.vue";
import Login from "../components/routes/Login.vue";
import Registration from "../components/routes/Registration.vue";
import NotFound from "../components/routes/NotFound.vue";
import Profile from "../components/routes/Profile.vue";
import CategoriesData from "../components/routes/Categories.vue";
import PlatformsData from "../components/routes/Platforms.vue";
import DevelopersData from "../components/routes/Developers.vue";


//2. route - komponens hozzárendelés
const routes = [{
        name: "users",
        path: "/users",
        component: Users,
        meta: {
            requiresAuth: true
        }
    },
    {
        name: "profile",
        path: "/profile",
        component: Profile,
        meta: {
            requiresAuth: true
        }
    },
    {
        name: "login",
        path: "/login",
        component: Login,
        meta: {
            requiresAuth: false
        }
    },
    {
        name: "registration",
        path: "/registration",
        component: Registration,
        meta: {
            requiresAuth: false
        }
    },
    {
        name: "categories",
        path: "/categories",
        component: CategoriesData,
        meta: {
            requiresAuth: true
        }
    },
    {
        name: "developers",
        path: "/developers",
        component: DevelopersData,
        meta: {
            requiresAuth: true
        }
    },
    {
        name: "platforms",
        path: "/platforms",
        component: PlatformsData,
        meta: {
            requiresAuth: true
        }
    },
    {
        name: "fooldal",
        path: "/",
        component: Fooldal,
        meta: {
            requiresAuth: false
        }
    },
    {
        name: "404",
        path: '/404',
        component: NotFound,
        meta: {
            requiresAuth: false
        }
    },
    {
        path: '*',
        redirect: '/404'
    }
];

//3. Export, hogy kívülről elérhető legyen
export default routes;