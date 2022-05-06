import { takeLatest, put, StrictEffect, fork } from 'redux-saga/effects';

import { Action_Types } from '../constants';
import * as actions from '../actions';
import request from '../utils/request';

function* getVehicles(): Generator {
  try {
    const result: any = yield request('/hiring-challenge.json');
    yield put(actions.getVehicleDataSuccess(result));
  } catch (error) {
    console.error(error);
  }
}


function* watchGetVehicleData(): Generator<StrictEffect> {
  yield takeLatest(Action_Types.GET_VEHICLE_DATA_REQUEST, getVehicles);
}

const vehicleSagas = [fork(watchGetVehicleData)];

export default vehicleSagas;
