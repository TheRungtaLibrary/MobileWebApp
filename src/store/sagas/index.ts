import { all } from 'redux-saga/effects';
import vehicleSagas from './saga';

export default function* rootSaga() {
    yield all([...vehicleSagas]);
}
