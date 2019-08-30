import {goodsListAsyncAction} from "@actions/actionCreator"
export const mapStateToProps = (state)=>({
    list:state.week.goodsList
})

export const mapDispatchToProps = (dispatch)=>({
    handleGetGoodsList(cityId,id){
        
        dispatch(goodsListAsyncAction(cityId,id))
    }
})