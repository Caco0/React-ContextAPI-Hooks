import * as actionTypes from './action-types';

export const buildActions = (dispatch) => {
  return {
    increase: () => dispatch({ type: actionTypes.INCREASE }),
    decrease: () => dispatch({ type: actionTypes.DECREASE }),
    reset: () => dispatch({ type: actionTypes.RESET }),
    setCounter: (payLoad) =>
      dispatch({ type: actionTypes.SET_COUNTER, payLoad }),
    asyncIncrease: () => asyncIncreaseFr(dispatch),
    asyncError: () => asyncErrorFn(dispatch),
  };
};

const asyncIncreaseFr = async (dispatch) => {
  dispatch({ type: actionTypes.ASYNC_INCREASE_START });

  return await new Promise((r) => {
    setTimeout(() => {
      dispatch({ type: actionTypes.ASYNC_INCREASE_END });
      r('RESOLVED!');
    }, 3000);
  });
};
const asyncErrorFn = async (dispatch) => {
  dispatch({ type: actionTypes.ASYNC_INCREASE_START });

  return await new Promise((resolve, reject) => {
    setTimeout(() => {
      dispatch({ type: actionTypes.ASYNC_INCREASE_ERROR });
      reject(new Error('Ferrou!'));
    }, 2000);
  });
};
