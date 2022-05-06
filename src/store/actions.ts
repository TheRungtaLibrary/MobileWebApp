import { Action_Types } from './constants';
import { Vehicle } from './types';

export const getVehicleDataRequest = () => ({
  type: Action_Types.GET_VEHICLE_DATA_REQUEST
});

export const getVehicleDataSuccess = (vehicleData: Vehicle) => ({
  type: Action_Types.GET_VEHICLE_DATA_SUCCESS,
  payload: { vehicleData }
});
