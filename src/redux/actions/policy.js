import { api_url } from ".";
import { _fetchApi } from "./api";
import { GET_ALL_POLICIES } from "./types";

export function getAllPolicies() {
  return (dispatch) => {
    _fetchApi(
      `${api_url}/claims/get-item?policy_no=all`,
      (data) => {
        // if (data.success && data.results && data.results.length) {
        //   setPolicyInfo(data.results[0]);
        // }
        if (data.success && data.results) {
          dispatch({ type: GET_ALL_POLICIES, payload: data.results });
          //   setData(data.results);
        }
      },
      (err) => {
        // setLoadingAmount(false);
        console.log(err);
      }
    );
  };
}
