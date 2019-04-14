import { LOGOUT, LOGIN } from "../actions/types";

const initialState = {
  isLoggedIn: false,

  loggedUser: {}
};

export default function(state = initialState, action) {
  console.log(action.user)
  switch (action.type) {
    
    case LOGIN:
      return {
        ...state,
        isLoggedIn: true,
        loggedUser: action.user,
     
      };

    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        loggedUser: {}
      };

    default:
      return state;
  }
}
