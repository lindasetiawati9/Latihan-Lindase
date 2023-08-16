import { createWebHistory, createRouter } from "vue-router";
import Login from "../views/Login.vue";
import store from "../store";
import Register from "../views/Register.vue";
import Product from "../views/Product.vue";
import Home from "../views/Home.vue";
import Kontak from "../views/Kontak.vue";
import SingleProduct from "../views/SingleProduct.vue";
import Cart from "../views/Cart.vue";
import Checkout from "../views/Checkout.vue";

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
    {
        path: "/sp",
        name: "SingleProduct",
        component: SingleProduct,
    },
    {
        path: "/cart",
        name: "Cart",
        component: Cart,
    },
    {
        path: "/cekout",
        name: "Checkout",
        component: Checkout,
    },
    {
        path: "/kontak",
        name: "Kontak",
        component: Kontak,
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