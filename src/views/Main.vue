<script setup>
   import CommonAside from '@/components/CommonAside.vue';
   import CommonHeader from '@/components/CommonHeader.vue';
   import CommonTag from '@/components/CommonTag.vue';
</script>

<template>
   <div class="common-layout">
      <el-container class="lay-container">
         <!-- 自定义的左侧的组件 -->
         <common-aside />
         <el-container>
            <el-header class="el-header">
               <common-header />
               <!-- </common-header> -->
            </el-header>
            <common-tag />
            <el-main class="right-main">
               <router-view> </router-view>
            </el-main>
         </el-container>
      </el-container>
   </div>
</template>

<style scoped lang="less">
   .common-layout {
      width: 100%;
      height: 100vh;
   }
   .lay-container {
      width: 100%;
      height: 100%;
   }
   .el-header {
      background-color: #333;
      // width: 100%;
   }
</style>
