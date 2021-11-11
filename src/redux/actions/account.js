import { api_url } from ".";
import { _fetchApi } from "./api";
import { GET_EXPENSES_ACC_HEAD, GET_PATIENT_LIST, SET_PATIENTS } from "./types";

const endpoint = "account";
export function getExpensesAccHeads() {
  return (dispatch) => {
    // dispatch({ type: GET_ACC_HEAD_LOADING });
    _fetchApi(
      `${api_url}/${endpoint}/head/expenses`,
      ({ results }) => {
        // dispatch({ type: GET_ACC_HEAD_LOADING })
        dispatch({ type: GET_EXPENSES_ACC_HEAD, payload: results });
      },
      (err) => {
        // dispatch({ type: GET_ACC_HEAD_LOADING })
        alert(err.toString());
      }
    );
  };
}

export function getClient(success = (f) => f, error = (f) => f) {
  return (dispatch) => {
    _fetchApi(
      `${api_url}/account/get_client_records`,
      ({ results }) => {
        dispatch({ type: GET_PATIENT_LIST, payload: results });
        dispatch(setPatientDetails(results));
      },
      (err) => {
        error(err);
        console.log(err);
      }
    );
  };
}

function setPatientDetails(results = []) {
  return (dispatch) => {
    if (results.length) {
      let patients = [];
      let names = [];
      let accountNos = [];
      for (let i = 0; i < results.length; i++) {
        const { customer_code, first_name, Middle_name, id } = results[i];
        patients.push({ customer_code, first_name, Middle_name, id });
        names.push(`${first_name} ${Middle_name} (${customer_code})`);
        accountNos.push(customer_code);
      }
      dispatch({
        type: SET_PATIENTS,
        payload: { patients, names, accountNos },
      });
    }
  };
}
