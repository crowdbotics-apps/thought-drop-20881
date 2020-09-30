import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import SignUp24117890Reducer from '../features/SignUp24117890/redux/reducers'
import SignIn12117886Reducer from '../features/SignIn12117886/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
SignUp24117890: SignUp24117890Reducer,
SignIn12117886: SignIn12117886Reducer,

});