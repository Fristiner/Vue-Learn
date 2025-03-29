<script setup></script>

<template>
   <div>
      <el-row class="home" :gutter="20">
         <el-col :span="8" style="margin-top: 20px">
            <el-card>
               <div class="user">
                  <img class="user" :src="getImageUrl('user')" />
                  <div class="user-info">
                     <p>admin</p>
                     <p>超级管理员</p>
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

<style scoped lang="less"></style>
