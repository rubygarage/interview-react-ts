import { applyMiddleware, compose, createStore } from 'redux';
import { createLogicMiddleware } from 'redux-logic';
import { createLogic } from 'redux-logic';

const reducer = (state = null, action: any) => {
  return state;
};

const submitLogic = createLogic({
  type: 'SUBMIT',
  latest: true,

  process({ getState, action }, dispatch, done) {
    done();
  }
});

const logics = [submitLogic];

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const logicMiddleware = createLogicMiddleware(logics);

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(logicMiddleware))
);

export default store;
