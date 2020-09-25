import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeComponent from "@/components/Home/HomeComponent";
import ApiTestComponent from "@/components/Test/ApiTestComponent"


Vue.use(VueRouter);
const routes = [
    {
        path: '/',
        component: HomeComponent,
    },
    {
        path: '/test',
        component: ApiTestComponent,
    }
];

export default new VueRouter({
    routes
});
