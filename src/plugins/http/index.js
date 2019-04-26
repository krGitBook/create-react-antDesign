import axios from "axios";
import APIS from 'assets/apis';
import utils from 'plugins/utils';
import Qs from "qs";

const instance = axios.create();
instance.defaults = {
  timeout: 10000,//超时时间
  withCredentials: true,//允许携带cookie
  mode: 'cors',//允许跨域
};

//添加一个请求拦截器，用于设置请求过渡状态
instance.interceptors.request.use(config => {
  const headers = config.headers;
  // 获取请求类型并转化成小写
  const method = config.method.toLowerCase();
  let contentType ='application/json';   // 请求返回的参数类型
  if(headers['Content-Type']){
    contentType = headers['Content-Type'].toLowerCase()
  }
  if (contentType.indexOf('application/x-www-form-urlencoded') != -1) {
    if('put,post'.indexOf(method)!=-1){
      //post请求参数用&拼接
      config.data = Qs.stringify(config.data);
    }
  }
  return config
}, error => {
  return Promise.reject(error)
});


//过滤空參和空格
function filterNull(o) {
  for (let key in o) {
    if (o[key] === null) {
      delete o[key];
    }
    if (utils.dataType(o[key]) === "string") {
      o[key] = o[key].trim();
    } else if (utils.dataType(o[key]) === "object") {
      o[key] = filterNull(o[key]);
    } else if (utils.dataType(o[key]) === "array") {
      o[key] = filterNull(o[key]);
    }
  }
  return o;
}

function findUrl(url) {
  if (!APIS[url] || !APIS[url].url) {
    console.error('找不到对应的api: ', url);
    return;
  }
}


export default {
  get: (url, params, config, success, failure) => new Promise((resolve, reject) => {
    if (params) {
      params = filterNull(params)
    }
    if (!(config && typeof config === 'object')) {
      failure = success;
      success = config;
    }
    findUrl(url);
    instance.get(APIS[url].url, {params: params}, config)
      .then(function (response) {
        response = response.data;
        success && success(response)
        resolve(response)
      })
      .catch(function (error) {
        if (error && error.data) {
          error = error.data;
          failure && failure(error)
          reject(error)
        }
      });
  }),

  post: (url, params, config, success, failure) => new Promise((resolve, reject) => {
    if (params) {
      params = filterNull(params)
    }
    if (!(config && typeof config === 'object')) {
      failure = success;
      success = config;
    }
    findUrl(url);
    instance.post(APIS[url].url, params, config)
      .then(function (response) {
        response = response.data;
        success && success(response)
        resolve(response)
      })
      .catch(function (error) {
        if (error && error.data) {
          error = error.data;
          failure && failure(error)
          reject(error)
        }
      });
  }),

  delete: (url, params, config, success, failure) => new Promise((resolve, reject) => {
    if (params) {
      params = filterNull(params)
    }
    if (!(config && typeof config === 'object')) {
      failure = success;
      success = config;
    }
    findUrl(url);
    instance.delete(APIS[url].url, {params: params}, config)
      .then(function (response) {
        response = response.data;
        success && success(response)
        resolve(response)
      })
      .catch(function (error) {
        if (error && error.data) {
          error = error.data;
          failure && failure(error)
          reject(error)
        }
      });
  }),

  put: (url, params, config, success, failure) => new Promise((resolve, reject) => {
    if (params) {
      params = filterNull(params)
    }
    if (!(config && typeof config === 'object')) {
      failure = success;
      success = config;
    }
    findUrl(url);
    instance.put(APIS[url].url, params, config)
      .then(function (response) {
        response = response.data;
        success && success(response)
        resolve(response)
      })
      .catch(function (error) {
        if (error && error.data) {
          error = error.data;
          failure && failure(error)
          reject(error)
        }
      });
  })
};
