<script setup>
   const getImageUrl = (user) => {
      return new URL(`../assets/images/${user}.png`, import.meta.url).href
   }
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
   }
</style>
