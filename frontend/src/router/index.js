import { createRouter, createWebHashHistory } from "vue-router"
import Home from "../views/Home"
import Information from "../views/Information"
import Contact from "../views/Contact"
import ExploreScience from "../views/ExploreScience"
import ProjectData from "../views/ProjectData"

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
  history: createWebHashHistory(),
  routes
});


export default router