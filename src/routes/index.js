import { createRouter, createWebHistory } from "vue-router";
const Home = () => import("../pages/Home.vue");
const About = () => import("../pages/About.vue");
const Contact = () => import("../pages/Contact.vue");
const Notfound = () => import("../pages/Notfound.vue");
const ViewLayout = () => import("../Layouts/ViewLayout.vue");

const routes = [
  {
    path: "/",
    component: ViewLayout,
    children: [
      { path: "", component: Home },
      { path: "/about", component: About },
      { path: "/contact", component: Contact },
      { path: "/:pathMatch(.*)*", component: Notfound },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
