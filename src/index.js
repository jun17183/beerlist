import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes";
import { Provider } from "react-redux";
import rootReducer from "./Modules/index";
import { rootSaga } from "./Modules/index";
import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware, compose } from "redux";

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(sagaMiddleware)
  )
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>
  ,
  document.getElementById('root')
);
