import {
    Home,
    Find,
    Order,
    Mine,
    Login,
    GoodsTypes,
    GoodsList
} from "@pages"

export const tabBarRoute = [
    {
        path:"/home",
        component:Home,
        meta:{
            flag:true
        },
        name:"首页",
        icon:"\ue628"
    },
    {
        path:"/find",
        component:Find,
        meta:{
            flag:true
        },
        name:"发现",
        icon:"\ue663"
    },
    {
        path:"/order",
        component:Order,
        meta:{
            flag:true
        },
        name:"订单",
        icon:"\ue737"
    },
    {
        path:"/mine",
        component:Mine,
        meta:{
            flag:true,
            auth:true
        },
        name:"我的",
        icon:"\ue617"
    }
]

export const noTabBarRoute = [
    {
        path:"/login",
        component:Login,
        meta:{
            flag:false
        },
        name:"登陆",
       
    },
    {
        path:"/goodsTypes",
        component:GoodsTypes,
        meta:{
            flag:false
        },
        name:"分类",
    },
    {
        path:"/goodsList/:id/:cityId",
        component:GoodsList,
        meta:{
            flag:false
        },
        name:"商品列表",
    }
]



export const routeConfig = tabBarRoute.concat(noTabBarRoute)