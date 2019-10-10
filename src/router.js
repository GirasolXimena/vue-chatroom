import Vue from "vue";
import Router from "vue-router";
import Login from "./views/Login.vue";
import ChatDashboard from "./views/ChatDashboard.vue";
// import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "login",
      component: Login
    },
    {
      /**
       *
       * If there's an issue later on, it's because of this.
       */
      path: "/chat",
      name: "chat",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(ChatDashboard)
    }
  ]
});
