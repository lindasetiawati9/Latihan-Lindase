import { createWebHistory, createRouter } from "vue-router";
import Login from "../views/Login.vue";
import store from "../store";
import Register from "../views/Register.vue";
import Product from "../views/Product.vue";
import Home from"../views/Home.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
        meta: {requiresGuest: true},
    },
    {
        path: "/register",
        name: "Register",
        component: Register,
    },
    {
        path: "/product",
        name: "Product",
        component: Product,
    },
   

];

const router = createRouter({
    history: createWebHistory(),
    routes
});
router.beforeEach((to, from, next) => {
    if (to.meta.requiresGuest && store.getters["auth/isAuthenticated"]) {
      next("/"); // Redirect to Home
    } else {
      next();
    }
  });
  router.beforeEach((to, from, next) => {
      if (to.meta.requiresLogin && store.getters["auth/isAuthenticated"]) {
        next("/login"); // Redirect to Home
      } else {
        next();
      }
    });


export default router;