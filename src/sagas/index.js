import { put, takeLatest, call, all} from 'redux-saga/effects';
import * as constants from '../constants';
import * as actionTypes from '../types';

export function* getCharactersAsync() {
    try {
        const endpoint = constants.ENDPOINT_URL;
        const response = yield call(fetch, endpoint);
        const data = yield response.json();
        yield all ([
            put({ type: actionTypes.GET_CHARACTERS_ASYNC, payload: data.results })
        ])
    }
    catch(error) {
        console.log(error);
        // yield put({ type: 'REQUESTED_DATA_ERROR'})
    }
}

export function* getCharacters() {
    yield takeLatest('GET_CHARACTERS', getCharactersAsync);
}
export default function* rootSaga() {
    yield all([
        getCharacters()
    ])
}