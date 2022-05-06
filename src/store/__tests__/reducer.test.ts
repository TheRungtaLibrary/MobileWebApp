import {
  vehicleDataReducer,
  initialState,
  State,
} from '../reducer';
import { actions } from '../_mocks_';
import { vehicleData } from '../data';
import { Action_Types as types } from '../constants';

describe('Given Store//reducer', () => {
  let initialMutableState: State;

  beforeAll(() => {
    initialMutableState = initialState;
  });

  it('Then should have an initial state', () => {
    expect(vehicleDataReducer(undefined, actions.NULL_ACTION)).toEqual(initialState);
  });

  it('should update open support requests when we call GET_VEHICLE_DATA_SUCCESS', () => {
    const action = {
      type: types.GET_VEHICLE_DATA_SUCCESS,
      payload: { vehicleData },
    };

    const expectedState = {
      ...initialMutableState,
      vehicle: vehicleData,
    };
    expect(vehicleDataReducer(undefined, action)).toEqual(expectedState);
  });
});
