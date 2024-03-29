import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue"
import Information from "../views/Information.vue"
import Contact from "../views/Contact.vue"
import ExploreScience from "../views/ExploreScience.vue"
import VisualizationData from "../views/VisualizationData.vue"
import ProjectTeam from "../views/ProjectTeam.vue"

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
    path: "/ProjectTeam",
    name: "ProjectTeam",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: ProjectTeam
  },
  {
    path: "/VisualizationData",
    name: "VisualizationData",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: VisualizationData
  },

  {
    path: "/ExploreScience",
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

export default router;