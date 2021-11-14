import { combineReducers } from "redux";
import { all, takeLatest, takeEvery } from "redux-saga/effects";
import { enableES5 } from "immer";
import beerlistReducer from "./reducers/beerlist";
import { handleGetBeerlist } from "./sagas/beerlist";
import { GET_DATA } from "./reducers/beerlist";

enableES5();

const rootReducer = combineReducers({
  beerlist: beerlistReducer,
});

export default rootReducer;

//wathcer saga
export function* rootSaga() {
  yield takeLatest(GET_DATA, handleGetBeerlist)
  // yield all([
  // ]);
}
