import { combineReducers } from "redux";
import { takeLatest } from "redux-saga/effects";
import { enableES5 } from "immer";
import beerlistReducer from "./reducers/beerlist";
import { handleGetBeerlist } from "./sagas/beerlist";
import { INITIAL_SETTING } from "./reducers/beerlist";

enableES5();

const rootReducer = combineReducers({
  beerlist: beerlistReducer,
});

export default rootReducer;

//wathcer saga
export function* rootSaga() {
  yield takeLatest(INITIAL_SETTING, handleGetBeerlist)
  // yield all([
  // ]);
}
