import { createWebHistory, createRouter } from "vue-router";
import Login from "../views/Login.vue";
import store from "../store";
import Register from "../views/Register.vue";
//import Product from "../views/Product.vue";
import Home from "../views/Home.vue";
import Kontak from "../views/Kontak.vue";
import SingleProduct from "../views/SingleProduct.vue";
import Cart from "../views/Cart.vue";
import Checkout from "../views/Checkout.vue";
import Merk from "../views/Merk.vue";
import Kategori from "../views/Kategori.vue";
import Produk from "../views/Produk.vue";
// import SingleProduk from "../views/SingleProduk.vue";
import Profile from "../views/Profile.vue";
import PageOrder from "../views/PageOrder.vue";

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
    // {
    //     path: "/product",
    //     name: "Product",
    //     component: Product,
    // },
    {
        path: "/singleproduct",
        name: "SingleProduct",
        component: SingleProduct,
    },
    {
        path: "/cart",
        name: "Cart",
        component: Cart,
    },
    {
      path: "/checkout",
      name: "Checkout",
      component: () => import("../views/Checkout.vue"),
      meta: { requireLogin: true },
      },
    {
        path:"/order/:orderCode",
        name: "PageOrder",
        component: PageOrder,
        props: true,
    },
    {
        path: "/kontak",
        name: "Kontak",
        component: Kontak,
    },
    {
        path: "/merk",
        name: "Merk",
        component: Merk,
    },
    {
        path: "/kategori",
        name: "Kategori",
        component: Kategori,
    },
    {
        path: "/produk",
        name: "Produk",
        component: Produk,
    },
    // {
    //     path: "/singleproduk",
    //     name: "SingleProduk",
    //     component: SingleProduk,
    // },
    {
        path: "/profile",
        name: "Profile",
        component: Profile,
    },
   

];

const router = createRouter({
    history: createWebHistory(),
    routes,
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

  function cekToken(to, from, next) {
    var isAuthenticated = false;
    if (localStorage.getItem("token")) isAuthenticated = true;
    else isAuthenticated = false;
    if (isAuthenticated) {
      next();
    } else {
      next("/login");
    }
  }

export default router;