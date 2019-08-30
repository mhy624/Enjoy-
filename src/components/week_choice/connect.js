import {updateCityId} from "@actions/actionCreator"
export const mapStateToProps = (state)=>({
    cityId:state.city.cityId
})


export const mapDispatchToProps = (dispatch)=>({
    handleUpdateCity(cityId){
        dispatch(updateCityId(cityId))
    }
})