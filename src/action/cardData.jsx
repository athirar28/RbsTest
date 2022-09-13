import {getCharacterDetails} from "../services/cardData"

const getDetails=(params)=>{
   return async dispatch=>{
    try{
        const response = await getCharacterDetails(params);
        if(response){
            dispatch({
                type:'GET_DETAILS',
                cardData:response.data
            })
        }
    }
    catch(e){
        dispatch({
            type:'GET_DETAILS_FAIL',
            error:e.response
        })
    }
   }
}

const actions={
    getDetails
}
export default actions;