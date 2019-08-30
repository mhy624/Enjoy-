import Loadable from 'react-loadable';
import Loading from "@common/loading"

const Home = Loadable({
    loader:()=>import("./home"),
    loading:Loading
})

const Find = Loadable({
    loader:()=>import("./find"),
    loading:Loading
})

const Order = Loadable({
    loader:()=>import("./order"),
    loading:Loading
})

const Mine = Loadable({
    loader:()=>import("./mine"),
    loading:Loading
})

const Login = Loadable({
    loader:()=>import("./login"),
    loading:Loading
})
const GoodsTypes = Loadable({
    loader:()=>import("./goodsTypes"),
    loading:Loading
})

const GoodsList = Loadable({
    loader:()=>import("./goodsList"),
    loading:Loading
})

export {
    Home,
    Find,
    Order,
    Mine,
    Login,
    GoodsTypes,
    GoodsList
}