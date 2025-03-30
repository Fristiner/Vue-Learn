<script setup>
   import { ref, getCurrentInstance, onMounted } from 'vue';
   //  import axios, { Axios } from 'axios';
   const getImageUrl = (user) => {
      return new URL(`../assets/images/${user}.png`, import.meta.url).href;
   };

   //  axios({
   //     url: '/api/home/getTableData',
   //     method: 'get',
   //  }).then((res) => {
   //     // 把交互请求数据的流程 根据接口文档 跑通
   //     //
   //     if (res.data.code === 200) {
   //        console.log(res.data.data.tableData);
   //        tableData.value = res.data.data.tableData;
   //     }
   //  });

   const { proxy } = getCurrentInstance();

   const getTableData = async () => {
      const data = await proxy.$api.getTableData();
      // console.log(data);
      tableData.value = data.tableData;
   };

   const getCountData = async () => {
      const data = await proxy.$api.getCountData();
      console.log(data);
      countData.value = data;
      console.log(countData);
   };
   onMounted(() => {
      getTableData();
      getCountData();
   });
   const tableData = ref([]);

   const countData = ref([]);

   const tableLabel = ref({
      name: '课程',
      todayBuy: '今日购买',
      monthBuy: '本月购买',
      totalBuy: '总购买',
   });
</script>

<template>
   <div>
      <el-row class="home" :gutter="20">
         <el-col :span="8" style="margin-top: 20px">
            <el-card>
               <div class="user">
                  <img class="user" :src="getImageUrl('user1')" />
                  <div class="user-info">
                     <p class="user-info-admin">Admin</p>
                     <p class="user-info-p">超级管理员</p>
                  </div>
               </div>
               <div class="login-info">
                  <p>
                     上次登录时间:
                     <span>2025-03-29</span>
                  </p>
                  <p>
                     上次登录地点
                     <span>北京</span>
                  </p>
               </div>
            </el-card>
            <el-card shadow="hover" class="user-table">
               <el-table :data="tableData">
                  <el-table-column v-for="(val, key) in tableLabel" :key="key" :prop="key" :label="val"> </el-table-column>
               </el-table>
            </el-card>
         </el-col>
         <el-col :span="16" style="margin-top: 20px">
            <div class="num">
               <el-card :body-style="{ display: 'flex', padding: 0 }" v-for="item in countData" :key="item.name">
                  <component :is="item.icon" class="icons" :style="{ background: item.color }"></component>
                  <div class="detail">
                     <p class="num">￥{{ item.value }}</p>
                     <p class="txt">￥{{ item.name }}</p>
                  </div>
               </el-card>
            </div>
         </el-col>
      </el-row>
   </div>
</template>

<style scoped lang="less">
   .home {
      height: 100%;
      overflow: hidden;
      .user {
         display: flex;
         align-items: center;
         border-bottom: 1px solid #ccc;
         margin-bottom: 20px;
         img {
            width: 150px;
            height: 150px;
            border-radius: 50%;
            margin-right: 40px;
         }
      }
      .user-info {
         p {
            line-height: 40px;
            // font-size: 20px;
            font-family: sans-serif;
         }
         .user-info-p {
            color: #999;
         }
         .user-info-admin {
            font-size: 35px;
         }
      }
      .login-info {
         p {
            line-height: 30px;
            font-size: 14px;
            color: #999;
            span {
               color: #666;
               margin-left: 60px;
            }
         }
      }
      .user-table {
         margin-top: 20px;
      }
      .num {
         display: flex;
         flex-wrap: wrap;
         justify-content: space-between;
         .el-card {
            width: 32%;
            margin-bottom: 20px;
         }
         .icons {
            width: 80px;
            height: 80px;
            font-size: 30px;
            text-align: center;
            line-height: 80px;
            color: #fff;
         }
         .detail {
            margin-left: 15px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            .num {
               font-size: 30px;
               margin-bottom: 10px;
            }
            .txt {
               font-size: 15px;
               text-align: center;
               color: #999;
            }
         }
      }
   }
</style>
