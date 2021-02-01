import { LOGIN } from '../Actions/actionsType';
const initialState = {
  data: []
}

const loginReducer = (state = initialState, action ) => {
  switch (action.type) {
    case LOGIN: 
      return {
        data: action.payload
      }
    default: return state;
  }
}
export default loginReducer;
