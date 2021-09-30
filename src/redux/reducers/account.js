import {
  GET_EXPENSES_ACC_HEAD_LOADING,
  GET_EXPENSES_ACC_HEAD,
  GET_PATIENT_LIST,
  SET_PATIENTS,
} from "redux/actions/types";

const initialState = {
  expensesHeads: [],
  expensesHeadsLoading: false,
  patientlist: [],
  patients: [],
  names: [],
  accountNos: [],
};

const accountReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_EXPENSES_ACC_HEAD_LOADING:
      return {
        ...state,
        expensesHeadsLoading: !state.expensesHeadsLoading,
      };
    case GET_EXPENSES_ACC_HEAD:
      return {
        ...state,
        expensesHeads: action.payload,
      };
    case GET_PATIENT_LIST:
      return {
        ...state,
        patientlist: action.payload,
      };
    case SET_PATIENTS: {
      const { patients, names, accountNos } = action.payload;
      return {
        ...state,
        patients,
        names,
        accountNos,
      };
    }

    default:
      return state;
  }
};

export default accountReducer;
