import DEFAULT_STATES from '../consts/default_states';
import { USER, STATE } from '../consts/types';

export default (state = DEFAULT_STATES.user, action) => {
  switch (action.type) {
    case USER.FETCH:
      switch (action.state) {
        case STATE.SUCCESS: {
          return {
            ...state, profile: action.profile, state: STATE.SUCCESS,
          };
        }
        case STATE.FAILED:
          return { ...state, state: STATE.FAILED };
        case STATE.LOADING:
          return { ...state, state: STATE.LOADING };
        default:
          return state;
      }
    case USER.REMOVE: {
      return {
        profile: null, state: STATE.INITIAL,
      };
    }
    default:
      return state;
  }
};
