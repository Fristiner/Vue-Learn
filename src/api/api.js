/**
 * 整个项目的api的统一管理
 */

import request from './request';

// 请求首页左侧的表格数据

export default {
   getTableData() {
      return request({
         url: '/home/getTableData',
         method: 'get',
         mock: false,
      });
   },
   getCountData() {
      return request({
         url: '/home/getCountData',
         method: 'get',
         mock: true,
      });
   },
   getChartData() {
      return request({
         url: '/home/getChartData',
         method: 'get',
      });
   },
   getUserData(data) {
      return request({
         url: '/home/getUserData',
         method: 'get',
         data,
      });
   },
   deleteUser(data) {
      return request({
         url: '/user/delete',
         method: 'get',
         data,
      });
   },
};
