/*
 * Quiz Reducer
 *
 * Fetch Question
 * Sets in state,
 *
 */
import { fromJS } from 'immutable';
import {FETCH_PEOPLES,FETCH_PEOPLES_SUCCESS,FETCH_PEOPLES_ERROR,SET_USER_NAME} from './constants'

export const initialState = fromJS({
  isFetching: false,
  characters: null,
  filmError:null,
  userName:''
});

function loginReducer(state = initialState, {type,data,error,userName}) {
  switch(type){
    case FETCH_PEOPLES:
      return state.set('isFetching',true);
    case FETCH_PEOPLES_SUCCESS:
      return state.set('isFetching',false).set('characters',data.results);
    case FETCH_PEOPLES_ERROR:
        return state.set('isFetching',false).set('filmError',error);
    case SET_USER_NAME:
        return state.set('userName',userName);
    default:
      return state;
  }
}

export default loginReducer;
