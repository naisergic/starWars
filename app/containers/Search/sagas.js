/**
 * fetch planet
 */

import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';

import { FETCH_PLANTES } from './constants';
import {fetchPlanetSuccess, fetchPlanetError} from './actions'
/**
 * fetch planet api
 */
export function* getPlanets({palnetName}) {
  const requestURL = `https://swapi.co/api/planets/?search=${palnetName}`;

  try {
    // Call our request helper (see 'utils/request')
    const result = yield call(request, requestURL);
    if(Array.isArray(result.results) && result.results.length){
      return yield put(fetchPlanetSuccess(result));
    }
    return yield put(fetchPlanetError('SomeThing Went wrong'));
  } catch (err) {
    return yield put(fetchPlanetError(err));
  }
}

export function* fetchPlanets() {
  yield takeLatest(FETCH_PLANTES, getPlanets);
}

export default [fetchPlanets];
