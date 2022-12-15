import Vue from "vue";
import VueRouter from "vue-router";
import bookCards from "../components/book-cards.vue";
import bookDetails from "../components/book-details.vue";

Vue.use(VueRouter);

const routes = [
  { path: "", component: bookCards },
  { path: "/:id/details", component: bookDetails },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
