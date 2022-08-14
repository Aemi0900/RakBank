import { create } from "apisauce";

import {
  API_LOG,
  API_TIMEOUT,
  ERROR_SOMETHING_WENT_WRONG,
  ERROR_NETWORK_NOT_AVAILABLE,
  ERROR_REQUEST_TIMEOUT,
  ERROR_UNAUTHORIZED,
  ERROR_NOT_FOUND,
} from "../config/WebService";
import AppConfig from "../config/AppConfig";


const api = create({
  baseURL: '',
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    "Cache-Control": "no-cache",
    "accept-version": AppConfig.appDisplayVersion,
  },
  timeout: API_TIMEOUT,
});

class ApiSauce {
  async post(url, data,headers) {

    const response = await api.post(url, data, { headers });

    if (__DEV__ && API_LOG) {
      consoleLog(response);
    }

    return new Promise((resolve, reject) => {
      this.handlePromise(resolve, reject, response);
    });
  }
  async put(url, data,headers) {

    const response = await api.put(url, data, { headers });

    if (__DEV__ && API_LOG) {
      consoleLog(response);
    }

    return new Promise((resolve, reject) => {
      this.handlePromise(resolve, reject, response);
    });
  }

  async delete(url, data,headers) {

    const response = await api.delete(url, data, { headers });

    if (__DEV__ && API_LOG) {
      consoleLog(response);
    }

    return new Promise((resolve, reject) => {
      this.handlePromise(resolve, reject, response);
    });
  }

  async get(url, data,headers) {
    const response = await api.get(url, data, { headers });

    if (__DEV__ && API_LOG) {
      consoleLog(response);
    }

    return new Promise((resolve, reject) => {
      this.handlePromise(resolve, reject, response);
    });
  }



  handlePromise = (resolve, reject, response) => {
    let customErrorParam;

    if (response.ok && response.data && !response.data.error) {
      resolve(response.data);
    } else {
      if (
        (response.data &&
          response.data.error &&
          response.data.error.code &&
          response.data.error.code === "AUTHORIZATION_REQUIRED") ||
        response?.data?.message === "Unauthenticated."
      ) {
        reject(ERROR_UNAUTHORIZED);

      }
      if (response.problem === "NETWORK_ERROR") {
        reject(ERROR_NETWORK_NOT_AVAILABLE);
      }
      if (response.problem === "TIMEOUT_ERROR") {
        reject(ERROR_REQUEST_TIMEOUT);
      }
      if (response.status === 500) {
        reject(ERROR_SOMETHING_WENT_WRONG);
      }
      if (response.status === 404) {
        reject(ERROR_NOT_FOUND);
      }
      if (response.status === 406) {
        // GlobalAlert.showCustomErrorAlert(
        //   response?.data?.message,
        //   response?.data?.data?.errors,
        // );

        customErrorParam = { doIgnore: true };
      }
      if (response.status === 412) {
        reject();
      }
      reject(customErrorParam || response.data || response);
    }
  };
}

export default new ApiSauce();
