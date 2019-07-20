import {FETCH_PEOPLES,FETCH_PEOPLES_SUCCESS,FETCH_PEOPLES_ERROR,SET_USER_NAME} from './constants'

export const fetchFilms=()=>{
  return{
    type: FETCH_PEOPLES,
  }
}

export const fetchPeopleSuccess=(data)=>{
  return{
    type: FETCH_PEOPLES_SUCCESS,
    data
  }
}

export const fetchPeopleError=(error)=>{
  return{
    type: FETCH_PEOPLES_ERROR,
    error
  }
}

export const setUserName=(userName)=>{
  return {
    type: SET_USER_NAME,
    userName
  }
}
