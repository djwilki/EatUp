import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// import authentication from "./authentication";
import auth from './auth';
import content from './content';
import event from './event';

const rootReducer = combineReducers({
// authentication,
auth,
content,
event
});

let storeEnhancer;

if (process.env.NODE_ENV !== 'production') {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  storeEnhancer = composeEnhancers(applyMiddleware(thunk));
} else {
  storeEnhancer = applyMiddleware(thunk);
}

//added ={}
export default function configureStore(initialState={}) {
  return createStore(
    rootReducer,
    initialState,
    storeEnhancer
  )
}
