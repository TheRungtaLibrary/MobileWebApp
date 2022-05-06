import configureStore from 'redux-mock-store';
import * as types from '../constants';
import { getVehicleDataRequest, getVehicleDataSuccess } from '../actions';
import { vehicleData } from '../data';

const mockStore = configureStore();
const store = mockStore();

describe('given Store/actions', () => {
  beforeEach(() => {
    store.clearActions();
  });

  describe('Every action dispatches the correct action and payload', () => {
    it('Then should dispatch a getVehicleDataRequest action', () => {
      const expectedActions = [
        {
          type: types.Action_Types.GET_VEHICLE_DATA_REQUEST,
        },
      ];

      store.dispatch(getVehicleDataRequest());
      expect(store.getActions()).toEqual(expectedActions);
    });

    it('Then should dispatch a getVehicleDataRequestSuccess action', () => {
      const expectedActions = [
        {
          type: types.Action_Types.GET_VEHICLE_DATA_SUCCESS,
          payload: { vehicleData },
        },
      ];

      store.dispatch(
        getVehicleDataSuccess(vehicleData),
      );
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
