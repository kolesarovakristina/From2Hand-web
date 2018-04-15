import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers";

export default function configureStore() {
  // const middlewares = [thunk];
  // const enhancers = [applyMiddleware(...middlewares)];

  // const composeEnhancers =
  //   process.env.NODE_ENV !== "production" && typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  //     ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  //     : compose;
  // const store = createStore(rootReducer, fromJS(initialState), composeEnhancers(...enhancers));
  // const store = createStore(rootReducer, fromJS(initialState));
  const store = createStore(rootReducer, applyMiddleware(thunk));
  return store;
}
