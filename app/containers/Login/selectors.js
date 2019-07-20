import { createSelector } from 'reselect';
import {Map} from 'immutable';
import {LOGIN_STATE_KEY} from './constants';

const selectUser = (state) => {
  if(state){
    return state[LOGIN_STATE_KEY];
  }
  return Map({});
}

export const makeSelectFetching = ()=>{
  return createSelector(selectUser,isFetching=>{
    return isFetching.get('isFetching',false);
  })
}

export const makeSelectUserName = ()=>{
  return createSelector(selectUser,userName=>{
    if(userName){
      return userName.get('userName','');
    }
    return '';
  })
}

export const makeSelectError = ()=>{
  return createSelector(selectUser,error=>{
    return error.get('error');
  })
}

export const makeSelectBirthDate = ()=>{
  return createSelector(selectUser,characters=>{
    const charcters = characters.get('characters');
    if(charcters && charcters.length){
      return charcters[0].birth_year;
    }
  })
}
