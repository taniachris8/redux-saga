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
import { fetchServices, fetchDetails } from "../api";

function* workGetServiceListFetch() {
  try {
    const data: ServicesType = yield call(fetchServices);
    yield put(getServiceListSuccess(data));
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    yield put(getServiceListFailure());
  }
}

function* serviceSaga() {
  yield takeLatest(getServiceListRequired.type, workGetServiceListFetch);
}

function* workGetDetailsFetch(action: ReturnType<typeof getDetailsRequired>) {
  try {
    const data: DetailsType = yield call(fetchDetails, action.payload);
    yield put(getDetailsSuccess(data));
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    yield put(getDetailsFailure());
  }
}

function* detailsSaga() {
  yield takeLatest(getDetailsRequired.type, workGetDetailsFetch);
}

export default function* rootSaga() {
  yield all([serviceSaga(), detailsSaga()]);
}