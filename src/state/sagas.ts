import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  getServiceListRequired,
  getServiceListSuccess,
  getServiceListFailure,
} from "./servicesSlice";
import {
  getDetailsRequired,
  getDetailsSuccess,
  getDetailsFailure,
} from "./detailsSlice";
import type { ServicesType, DetailsType } from "../serviceTypes";

const url = "http://localhost:7070/api/services";

function* workGetServiceListFetch() {
  try {
    const response: Response = yield call(fetch, url);
    const data: ServicesType = yield call([response, "json"]);
    yield put(getServiceListSuccess(data));
  } catch (e) {
    yield put(getServiceListFailure());
  }
}

function* serviceSaga() {
  yield takeLatest(getServiceListRequired.type, workGetServiceListFetch);
}

function* workGetDetailsFetch(action: ReturnType<typeof getDetailsRequired>) {
  try {
    const response: Response = yield call(fetch, `${url}/${action.payload}`);
    const data: DetailsType = yield call([response, "json"]);
    yield put(getDetailsSuccess(data));
  } catch (e) {
    yield put(getDetailsFailure());
  }
}

function* detailsSaga() {
  yield takeLatest(getDetailsRequired.type, workGetDetailsFetch);
}

export default function* rootSaga() {
  yield all([serviceSaga(), detailsSaga()]);
}