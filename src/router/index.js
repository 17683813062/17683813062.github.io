import { createRouter,createWebHashHistory } from "vue-router";
import { useStore } from 'vuex';
import Home from "../views/home/Home.vue";
const routes = [
    {
        path:"/",
        redirect:"/home"
    },
    {
        path:"/home",
        component:Home,
        // redirect:"/order",
        // children:[
        //     {
        //         path:"dining",
        //         name:"餐厅",
        //         component:() => import('../views/dining/dining.vue'),
        //     },
        //     {
        //         path:"order",
        //         name:"订单",
        //         component:() => import('../views/order/order.vue')
        //     },
        //     {
        //         path:"detail",
        //         name:"餐厅详情",
        //         component:() => import('../views/dining/diningDetail.vue'),
        //     }
        // ]
    },
    {
        path:"/pay",
        name:'pay',
        component:() => import("../views/home/pay.vue"),
    },
    {
        path:"/login",
        name:'登录',
        component:() => import("../views/login/login.vue"),
    },
    {
        path:"/regist",
        name:'注册',
        component:() => import("../views/login/regist.vue"),
    },
    {
        path:"/mine",
        name:'我的',
        component:() => import("../views/mine/mine.vue"),
    },
    {
        path:"/wp",
        name:'网盘',
        component:() => import("../views/mine/wp.vue"),
    },
    {
        path:"/wpdir/:dir",
        name:'wpdir',
        component:() => import("../views/mine/wpdir.vue"),
    },
    {
        path:"/tmm",
        component:() => import("../views/game/tmm.vue"),
    },
    {
        path:"/movecase",
        name:'动态',
        component:() => import("../views/movecase/list.vue"),
    },
    {
        path:"/addcase",
        name:'添加动态',
        component:() => import("../views/movecase/add.vue"),
    },
    {
        path:"/shop",
        component:() => import("../views/shop/shop.vue"),
    },
    {
        path:"/editgood",
        component:() => import("../views/shop/editGood.vue"),
    },
    {
        path:"/shopdetail",
        name:'编辑商品',
        component:() => import("../views/shop/shopDetail.vue"),
    },
    {
        path:"/leaveword",
        name:'留言',
        component:() => import("../views/mine/leaveword.vue"),
    },
    {
        path:"/leaveList",
        name:'留言列表',
        component:() => import("../views/mine/leaveList.vue"),
    },
    {
        path:"/nearMan",
        name:'附近的人',
        component:() => import("../views/mine/nearMan.vue"),
    },
    {
        path:"/diction_list",
        component:() => import("../views/diction/list.vue"),
    },
    {
        path:"/getOnlinePath",
        name:'获取在线链接',
        component:() => import("../views/shop/getOnlinePath.vue"),
    },
    {
        path:"/study",
        component:() => import("../views/study/Study.vue"),
        // children:[
        //     {
        //         path:'add',
        //         name:'studyAdd',
        //         component:() => import("../views/study/add.vue")
        //     }
        // ]
    },
    {
        path:"/studyAdd",
        component:() => import("../views/study/add.vue")
    },
    {
        path:"/studydetail",
        name:'studydetail',
        component:() => import("../views/study/detail.vue")
    },
    {
        path:"/phone_login",
        name:'手机号登录',
        component:() => import("../views/login/phone_login.vue"),
    },
    {
        path:"/phone_regist",
        name:'手机号注册',
        component:() => import("../views/login/phone_regist.vue"),
    },
    {
        path:"/hospital_list",
        name:'疫情',
        component:() => import("../views/hospital/list.vue"),
    },
    {
        path:"/:pathMatch(.*)*",
        name:"NotFound",
        component:() => import("../views/notFound/notFound.vue")
    }
];

const router = createRouter({
    history:createWebHashHistory(),
    routes
})

export default router;