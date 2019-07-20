/*
 * Quiz Reducer
 *
 * Fetch Question
 * Sets in state,
 *
 */
import { fromJS } from 'immutable';
import {FETCH_PLANTES_SUCCESS,FETCH_PLANTES_ERROR} from './constants'

export const initialState = fromJS({
  planets:'',
  error:null
});

function palnetReducer(state = initialState, {type,data,error,}) {
  switch(type){
    case FETCH_PLANTES_SUCCESS:
      return state.set('planets',data.results);
    case FETCH_PLANTES_ERROR:
        return state.set('error',error);
    default:
      return state;
  }
}

export default palnetReducer;
