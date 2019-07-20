/**
 * authentication check
 */

import { call, put, takeLatest,select } from 'redux-saga/effects';
import request from 'utils/request';

import { FETCH_PEOPLES } from './constants';
import {fetchPeopleSuccess, fetchPeopleError} from './actions'
import {makeSelectUserName} from './selectors';
/**
 * authentication check
 */
export function* getPeoples() {
  const userName = yield select(makeSelectUserName())
  const requestURL = `https://swapi.co/api/people/?search=${userName}`;

  try {
    // Call our request helper (see 'utils/request')
    const result = yield call(request, requestURL);
    if(Array.isArray(result.results) && result.results.length){
      return yield put(fetchPeopleSuccess(result));
    }
    return yield put(fetchPeopleError('SomeThing Went wrong'));
  } catch (err) {
    return yield put(fetchPeopleError(err));
  }
}

export function* fetchPeoples() {
  yield takeLatest(FETCH_PEOPLES, getPeoples);
}

export default [fetchPeoples];
