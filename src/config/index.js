const env = import.meta.env.MODE || 'prod';
const EnvConfig = {
   development: {
      baseApi: '/api',
      mockApi: 'https://apifoxmock.com/m1/4068509-0-default/api',
   },
   test: {
      baseApi: '/test/api',
      mockApi: 'https://apifoxmock.com/m1/4068509-0-default/api',
   },
   prod: {
      baseApi: '/prod/api',
      mockApi: 'https://apifoxmock.com/m1/4068509-0-default/api',
   },
};

export default {
   env,
   ...EnvConfig[env],
   mock: false,
};
