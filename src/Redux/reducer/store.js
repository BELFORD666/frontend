import { createStore } from "redux";

import { reducers } from "./reducersCombine";

export const store = createStore(
  reducers,
  {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

 
