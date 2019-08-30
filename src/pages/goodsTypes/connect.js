import {goodsTypesAsyncAction} from "@actions/actionCreator"
export const mapStateToProps = (state)=>({
    goodsTypes:state.week.goodsType,
    cityId:state.city.cityId
})

export const mapDispatchToProps = (dispatch)=>({
    handleGetGoodsTypes(){
        dispatch(goodsTypesAsyncAction())
    },
    handleTo(id){
        let {cityId} = this.props;
        this.props.history.push({pathname:"/goodsList/"+id+"/"+cityId})
        
    }
})