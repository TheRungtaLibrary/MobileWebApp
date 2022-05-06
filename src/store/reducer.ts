import { Reducer } from 'redux';
import { Action_Types } from './constants';
import { VehicleInfo } from './types';

export type State = VehicleInfo;

export const initialState: State = {
  vehicle: {
    title: '',
    htmlDescription: '',
    images: [],
  },
  isLoading: false,
};

export const vehicleDataReducer: Reducer = (state = initialState, action) => {
  switch (action.type) {
    case Action_Types.GET_VEHICLE_DATA_SUCCESS:
      return {
        ...state,
        vehicle: action.payload.vehicleData,
      };
    default:
      return state;
  }
};
