import { all } from 'redux-saga/effects';
import { userSaga } from './user/userSaga';

export default function* rootSaga() {
    console.log('rootSaga');
    yield all([userSaga()]);
}
