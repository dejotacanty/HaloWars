import axios from 'axios';

// Add a request interceptor
axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    //if header is already set, a retry is happening with different key.
    if(config.headers && config.headers["Ocp-Apim-Subscription-Key"]) {
      return config
  }
  config.headers = {
      "Ocp-Apim-Subscription-Key": process.env.REACT_APP_API_KEY_1 as string
  }
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
axios.interceptors.response.use(function (response) {
    // Do something with response data
    return response;
  }, function (error) {
    const response = error.response
    console.log('checking to send again', {error: JSON.parse(JSON.stringify(error)), response})
    // Do something with response error
    if(error.config && !response && error.message === "Network Error") {
      if(error.config.headers['Ocp-Apim-Subscription-Key'] === process.env.REACT_APP_API_KEY_1 as string) {
        console.log('sending request with second key')
        error.config.headers['Ocp-Apim-Subscription-Key'] = process.env.REACT_APP_API_KEY_2
        return axios.request(error.config)
      }
    }
    return Promise.reject(error);
  });

export default axios;