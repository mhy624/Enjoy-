import {handleActions} from "redux-actions";

const defaultState = {
    cityId: sessionStorage.getItem("cityId")||140
}

export default handleActions({
    UPDATE_CITYID:(state,action)=>{
        let cityState = Object.assign({},state);
        cityState.cityId = action.payload;
        sessionStorage.setItem("cityId",action.payload)
        return cityState;
    }
},defaultState)