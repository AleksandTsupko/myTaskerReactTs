import { ERootActionTypes } from '../actionTypes/actionTypes';
import { IRootState, IAction  } from '../../types/rootReducerTypes'; 

const initialState: IRootState = {
    user: {},
    users: [],
    loading: false,
    error: null
};

export const rootReducer = (state = initialState, action: IAction):IRootState => {
  switch (action.type) {

    case ERootActionTypes.FETCH_USER:
      return {
        ...state, user: action.payload,
      };

    default:
      return state;
  }
}
