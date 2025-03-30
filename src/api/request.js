import axios from 'axios';
import { ElMessage } from 'element-plus';
const service = axios.create({
   baseURL: config.baseApi,
});
const NETWORK_ERROR = '网络错误。。。';

import config from '@/config/index.js';
// 添加请求拦截器
// service.interceptors.request.use(
//    function (config) {
//       // 在发送请求之前做些什么
//       return config;
//    },
//    function (error) {
//       // 对请求错误做些什么
//       return Promise.reject(error);
//    },
// );

// 添加响应拦截器
service.interceptors.response.use((res) => {
   //  console.log(res);
   const { code, data, msg } = res.data;
   if (code === 200) {
      return data;
   } else {
      ElMessage.error(msg || NETWORK_ERROR); // 应该为表达式
      return Promise.reject(msg || NETWORK_ERROR);
   }
});

function request(options) {
   options.method = options.method || 'get';
   // 关于get 请求参数的调整
   if (options.method.toLowerCase() === 'get') {
      options.params = options.data;
   }
   // 对mock的开关进行处理
   let isMock = config.mock;
   if (typeof options.mock !== 'undefined') {
      isMock = options.mock;
   }
   // 针对环境做一个处理
   if (config.env === 'prod') {
      // 不能用mock
      service.defaults.baseURL = config.baseApi;
   } else {
      service.defaults.baseURL = isMock ? config.mockApi : config.baseApi;
      // console.log(service.defaults.baseURL);
   }
   return service(options);
}

export default request;
