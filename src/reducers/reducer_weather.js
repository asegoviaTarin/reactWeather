import {FETCH_WEATHER} from '../actions/index'
export default function (state = [], action) {
  console.log('Action received', action);
  //if action is a promise, in this point is just resolvet throught middleware
  switch (action.type) {
    case FETCH_WEATHER:
      return state.concat([action.payload.data])
      // state.push(action.payload.data) ,NOT USE IN REACT BECAUSE MUTE THE STATE instead use:
      //state.concat([action.payload.data]) //same of [action.payload.data, ...state] (ES6) //return a new array not manipulate existend
      
      break;
  
    default:
      break;
  }
  return state;
}