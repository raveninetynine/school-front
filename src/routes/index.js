import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeComponent from "@/components/Home/HomeComponent";
import ApiTestComponent from "@/components/Test/ApiTestComponent"
import SearchHomeComponent from "@/components/SearchHome/SearchHomeComponent"


Vue.use(VueRouter);
const routes = [
    {
        path: '/',
        component: HomeComponent,
    },
    {
        path: '/test',
        component: ApiTestComponent,
    },
    {
        path: '/snus',
        component: SearchHomeComponent,
    },
];

export default new VueRouter({
    routes
});
