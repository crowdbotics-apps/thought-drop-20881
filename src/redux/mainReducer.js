import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import SignIn23117891Reducer from '../features/SignIn23117891/redux/reducers'
import SignUp24117890Reducer from '../features/SignUp24117890/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
SignIn23117891: SignIn23117891Reducer,
SignUp24117890: SignUp24117890Reducer,

});