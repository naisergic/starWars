import {FETCH_PLANTES,FETCH_PLANTES_SUCCESS,FETCH_PLANTES_ERROR,} from './constants'

export const fetchPlanet=(palnetName)=>{
  return{
    type: FETCH_PLANTES,
    palnetName
  }
}

export const fetchPlanetSuccess=(data)=>{
  return{
    type: FETCH_PLANTES_SUCCESS,
    data
  }
}

export const fetchPlanetError=(error)=>{
  return{
    type: FETCH_PLANTES_ERROR,
    error
  }
}
