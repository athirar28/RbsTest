const initialState={
    characterDetails:{}
}
export default function counter(state = initialState, action) {
    switch (action.type) {
      case 'GET_DETAILS':{
        return {...state,characterDetails:action.cardData}
      }
      case 'GET_DETAILS_FAIL':
        return {...state,characterDetails:action.error}
      default:
        return state
    }
  }