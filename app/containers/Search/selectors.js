import { createSelector } from 'reselect';
import {Map} from 'immutable';
import {PLANET_STATE_KEY} from './constants';
const selectUser = (state) => {
  if(state){
    return state[PLANET_STATE_KEY];
  }
  return Map({});
}

export const makeSelectPlanet = ()=>{
  return createSelector(selectUser,planets=>{
    return planets.get('planets',false);
  })
}

export const makeSelectCount = ()=>{
  return createSelector(selectUser,count=>{
    return count.get('count',0);
  })
}
