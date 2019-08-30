import {createAction} from "redux-actions"
import {goodsTypes,goodsList} from "@api/week"
export const updateCityId = createAction("UPDATE_CITYID",(val)=>val)
//同步的action
export const goodsTypesAction = createAction("GOODS_TYPES",(val)=>val);
//异步的action 处理异步  当数据请求成功后通过dispacth触发同步action
export const goodsTypesAsyncAction = ()=>{
    return async (dispatch)=>{
        let data = await goodsTypes();
        dispatch(goodsTypesAction(data))
    }
}


//同步action
export const goodsListAction = createAction("GOODS_LIST",(val)=>val);

//异步的action
export const goodsListAsyncAction = (cityId,id,type)=>{
    return async (dispatch)=>{
        let data = await goodsList(id,cityId,type);
        dispatch(goodsListAction(data));
    }
}