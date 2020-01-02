import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../../views/home.vue";
import About from "../../views/about.vue";
import Contact from "../../views/contact.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "home",
        component: Home
    },
    {
        path: "/about",
        name: "about",
        component: About,
    },
    {
        path: "/contact",
        name: "contact",
        component: Contact,
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;