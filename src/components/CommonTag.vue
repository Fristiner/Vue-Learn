<template>
   <div class="tags">
      <el-tag v-for="(tag, index) in tages" :key="tag.name" :closable="tag.name !== 'home'" :effect="router.name === tag.name ? 'dark' : 'plain'">
         {{ tag.label }}
      </el-tag>
   </div>
</template>

<script setup>
   import { effect, ref } from 'vue';
   import { useRouter } from 'vue-router';
   const tages = ref([
      {
         path: '/home',
         name: 'home',
         label: '首页',
         icon: 'home',
      },
   ]);

   const router = useRouter;
</script>

<style lang="less" scoped>
   .tags {
      margin: 20px 0 0 20px;
   }
   .el-tag {
      margin-right: 10px;
   }
</style>
