import Vue from "vue";
import VueRouter from "vue-router";
import SignupForm from "../views/SignupForm.vue";
import SignupResult from "../views/SignupResult.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "SignupForm",
    component: SignupForm
  },
  {
    path: "/result",
    name: "SignupResult",
    component: SignupResult
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
