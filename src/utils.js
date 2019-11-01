import axios from 'axios';
import { apiUrl } from './constants';
import qs from 'query-string'

export function getObject(name) {
  if (window && window.localStorage) {
    return window.localStorage.getItem(name);
  }
  return null;
}

export function saveObject(key: String, value: Object) {
  if (window && window.localStorage) {
    window.localStorage.setItem(key, value);
  }
}

export function getHeaders() {
  let user = JSON.parse(getObject("andy-user"));
  //console.log("USer are", user && user.token);
  if (user)
    return {
      Authorization: `Bearer ${(user && user.token) || null}`,
    };
  return {}
}

export function generateUrl(path) {
  if (path.includes("http")) {
    return path;
  }
  return apiUrl + path;
}

export function apiReq(endPoint, data, method, headers, requestOptions = {}) {
  return new Promise((res, rej) => {

    headers = {
      ...getHeaders(),
      ...headers,
    };

    if (method === "get" || method === "delete") {
      data = {
        ...requestOptions,
        params: data,
        paramsSerializer: function (params) {
          return qs.stringify(params);
        },
        headers,
      };
    }

    axios[method](endPoint, data, { headers })
      .then(result => {
        let { data } = result;

        if (data.status === false) {
          return rej(data);
        }

        return res(data);
      })
      .catch(err => {
        return rej(err);
      });
  });
}

export function apiPost(endPoint, data, headers = {}) {
  return apiReq(generateUrl(endPoint), data, "post", headers);
}

export function apiDelete(endPoint, data, headers = {}) {
  return apiReq(generateUrl(endPoint), data, "delete", headers);
}

export function apiGet(endPoint, data, headers = {}, requestOptions) {
  return apiReq(generateUrl(endPoint), data, "get", headers, requestOptions);
}

export function apiPut(endPoint, data, headers = {}) {
  return apiReq(generateUrl(endPoint), data, "put", headers);
}
export function apiPatch(endPoint,data,headers = {}) {
  return apiReq(generateUrl(endPoint), data, "patch", headers)
}


export const scrollIntoView = (label) => {
  var elmnt = document.getElementById(label);
  if (elmnt) {
    setTimeout(() => {
      elmnt.scrollIntoView({ behavior: "smooth", block: "start", inline: "start" });
    }, 250);
  }
}