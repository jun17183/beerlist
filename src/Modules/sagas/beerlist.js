import { call, put } from "redux-saga/effects";
import { setData, setTableData, setModalData, setDataLoading } from "../reducers/beerlist";
import { requestGetBeerlist } from "./requests/beerlist";

export function* handleGetBeerlist(action) {
  try {
    yield put(setDataLoading(true));
    const response = yield call(requestGetBeerlist);
    const { data } = response;
    const tableData = data.map((item) => {
      return {
        id: item.id,
        name: item.name,
        tagline: item.tagline,
        first_brewed: item.first_brewed,
        abv: item.abv,
        srm: item.srm,
        ph: item.ph,
        attenuation_level: item.attenuation_level
      }
    });
    const modalData = data.map((item) => {
      return {
        name: item.name,
        image_url: item.image_url,
        tagline: item.tagline,
        description: item.description
      }
    })
    yield put(setData(data));
    yield put(setTableData(tableData));
    yield put(setModalData(modalData));
    yield put(setDataLoading(false));
  } catch (error) {
    console.log(error);
  }
}
