import Vue from 'vue'
import HelloPage from "./pages/HelloPage";
import FrogPage from "./pages/FrogPage";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
    { path: '/', component: HelloPage },
    { path: '/frog', component: FrogPage },
]

const router = new VueRouter({
    //mode: 'history',
    routes
})
export default router;