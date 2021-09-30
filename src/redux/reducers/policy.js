import { GET_ALL_POLICIES } from "redux/actions/types";

const defaultState = {
  policyList: [],
};

const policyReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_ALL_POLICIES:
      return {
        ...state,
        policyList: action.payload,
      };

    default:
      return state;
  }
};

export default policyReducer;
