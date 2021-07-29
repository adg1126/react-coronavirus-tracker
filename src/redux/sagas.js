import { all, call } from '@redux-saga/core/effects';
import { dataSagas } from './data/dataSagas';

export default function* rootSaga() {
  yield all([call(dataSagas)]);
}
