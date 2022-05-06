import { runSaga, Saga } from 'redux-saga';
import { AnyAction } from 'redux';
import { FetchMock } from 'jest-fetch-mock';
import { fromJS } from 'immutable';
import getVehicles from '../sagas';
import { getVehicleDataRequest } from '../actions';
import { vehicleData } from '../data';

describe('Given Store/saga', () => {
  let recordSaga: (saga: Saga, action: AnyAction) => void;
  let apiCall: (apiData: Object) => void;
  let token: string;
  let nextActions: AnyAction[];
  let fetch: FetchMock;

  beforeAll(() => {
    token = 'token';
    fetch = window.fetch as FetchMock;
    recordSaga = (saga, action) => {
      nextActions = [];

      runSaga(
        {
          dispatch: (newAction: AnyAction) => nextActions.push(newAction),
          getState: () => ({
            user: fromJS({
              token,
            }),
          }),
        },
        saga,
        action,
      );
    };

    apiCall = (apiData) => {
      fetch.mockResponseOnce(() =>
        Promise.resolve({
          status: 200,
          headers: {
            'Content-type': 'application/json',
            Authorization: token,
          },
          body: JSON.stringify(apiData),
        }),
      );
    };
  });

  beforeEach(() => {
    fetch.resetMocks();
  });

  describe('When sends a getVehicleDataRequest action', () => {
    beforeAll(() => {
      apiCall({
        data: {
          vehicle: { vehicleData },
        },
      });
      recordSaga(getVehicles, getVehicleDataRequest());
    });

    it('Then should have next actions', () => {
      expect(nextActions.length).toEqual(0);
    });
  });
});
