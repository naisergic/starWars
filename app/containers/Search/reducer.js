/*
 * Quiz Reducer
 *
 * Fetch Question
 * Sets in state,
 *
 */
import { fromJS } from 'immutable';
import {FETCH_PLANTES_SUCCESS,FETCH_PLANTES_ERROR,SET_COUNT} from './constants'

export const initialState = fromJS({
  planets:'',
  error:null,
  count:0
});

function palnetReducer(state = initialState, {type,data,error,}) {
  switch(type){
    case FETCH_PLANTES_SUCCESS:
      let count = state.get('count');
      return state.set('planets',data.results).set('count',++count);
    case FETCH_PLANTES_ERROR:
        return state.set('error',error);
    case SET_COUNT:
        return state.set('count',0);
    default:
      return state;
  }
}

export default palnetReducer;
