import {goodsListAsyncAction} from "@actions/actionCreator"
export const mapStateToProps = (state)=>({
    cityId:state.city.cityId,


})

export const mapDispatchToProps = (dispatch)=>({
    handleToggleTypes(item){
        this.setState({
            type:item.sort_name,
            flag:false
        })
        let sortid = item.sort_id;
        let cityId = this.props.match.params.cityId; 
        let type = this.props.match.params.id;
        dispatch(goodsListAsyncAction(cityId,type,sortid))
    }

})