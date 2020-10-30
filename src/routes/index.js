import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeComponent from "@/components/Home/HomeComponent";
import SearchHomeComponent from "@/components/SearchHome/SearchHomeComponent"
import ApiTestComponent from "@/components/Test/ApiTestComponent";
import LoginComponent from "@/components/Login/LoginComponent"
import SignupComponent from "@/components/Signup/SignupComponent"
import SearchRoomComponent from "@/components/SearchRoom/SearchRoomComponent"

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
        path: '/lots',
        component: SearchHomeComponent,
    },
    {
        path: '/login',
        component: LoginComponent,
    },
    {
        path: '/signup',
        component: SignupComponent,
    },
    {
        path: `/map`,
        component: SearchRoomComponent,
    },
];

export default new VueRouter({
    routes,
    mode: 'history'
});

