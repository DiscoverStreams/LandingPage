import { createRouter, createWebHashHistory } from "vue-router"
import Home from "../views/Home.vue"
import Information from "../views/Information.vue"
import Contact from "../views/Contact.vue"
import ExploreScience from "../views/ExploreScience.vue"
import ProjectData from "../views/ProjectData.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/Information",
    name: "Information",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Information
  },
  {
    path: "/Contact",
    name: "Contact",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Contact
  }, 
  {
    path: "/ProjectData",
    name: "ProjectData",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: ProjectData
  },

  {
    path: "/exploreScience",
    name: "ExploreScience",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: ExploreScience
  },
];

const router = createRouter({
  mode: "history",
  base: import.meta.env.BASE_URL,
  routes,
});

export default router