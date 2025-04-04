import Mock from 'mockjs';
import userApi from './MockData/user';
import homeApi from './MockData/home';
// 1.拦截的路径 2. 方法 3. 制造的假数据
Mock.mock(/api\/home\/getTableData/, 'get', homeApi.getTableData);
Mock.mock(/api\/home\/getCountData/, 'get', homeApi.getCountData);
Mock.mock(/api\/home\/getChartData/, 'get', homeApi.getChartData);
Mock.mock(/api\/home\/getUserData/, 'get', userApi.getUserList);
Mock.mock(/api\/user\/deleteUser/, 'get', userApi.deleteUser);
