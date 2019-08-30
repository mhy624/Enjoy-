import {handleActions} from "redux-actions";

const defaultState = {
    goodsType:[],
    goodsList:[]
}

export default handleActions({
    GOODS_TYPES:(state,action)=>{
        let goodsState = Object.assign({},state);
        goodsState.goodsType = action.payload;
        return goodsState;
    },
    GOODS_LIST:(state,action)=>{
        let listState = Object.assign({},state);
        listState.goodsList = action.payload;
        return listState;
    }
},defaultState)