// Redux
import {setCarriers, setCurrencies, setPlaces, setQuotes} from "../dataReducer";
// Effects
import {takeEvery, put, call} from 'redux-saga/effects'
// API
import getData from "../api/getData";


// [LOGIC] Workers
export function* workerSaga() {
    const data = yield call(getData)
    yield put(setQuotes(data.Quotes))
    yield put(setCarriers(data.Carriers))
    yield put(setPlaces(data.Places))
    yield put(setCurrencies(data.Currencies))
    // console.log('QUOTES: ', data.Quotes)
    // console.log('CARRIERS: ', data.Carriers)
    // console.log('PLACES: ', data.Places)
    // console.log('RURRENCIES: ', data.Currencies)
}

// [ACTIONS] Watchers
export function* watcherSaga() {
    yield takeEvery('CLICK', workerSaga)
}

// Root Saga
export default function* rootSaga() {
    yield call(watcherSaga)
}