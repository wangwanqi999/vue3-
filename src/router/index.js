import { createRouter,createWebHashHistory } from "vue-router";
// import Home from "../views/Home.vue";
import menu from '../views/Menu.vue'
const routes = [
{
  path:'/menu',
  name:'menu',
  component: menu,
  params:{
     
  }
}     
   
  // {
  //   path: "/",
  //   name: "Home",
  //   component: Home,
  // },
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue"),
  // },
];

const router = createRouter({
  // history(),
  history: createWebHashHistory(),
  routes,
});

export default router;
