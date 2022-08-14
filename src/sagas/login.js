import {take, put, call, fork} from 'redux-saga/effects';
import _ from 'lodash';

import ApiSauce from '../services/ApiSauce';
import {success, failure} from '../actions/LoginActions';
import {LOGIN} from '../actions/ActionTypes';

import * as RootNavigation from '../navigator/RootNavigation';
function redirectUser(url, response, payload) {
  RootNavigation.navigate('Home');
}

function callPostRequest(url, data, headers) {
  return ApiSauce.post(url, data, headers);
}

function* watchRequest() {
  while (true) {
    const {url, payload} = yield take(LOGIN.REQUEST);
    try {
      let response;
      response = yield call(callPostRequest, url, payload);
      const error = response.error;

      yield put(success(response));
      redirectUser(url, response, payload);
    } catch (err) {
      yield put(failure(err.message));
    }
  }
}

export default function* root() {
  yield fork(watchRequest);
}
