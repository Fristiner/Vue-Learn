<template>
   <div class="user-header">
      <el-button type="primary">新增</el-button>
      <el-form :inline="true" :model="formInline">
         <el-form-item label="请输入">
            <el-input placeholder="请输入用户名" v-model="formInline.keyWord"> </el-input>
         </el-form-item>
         <el-form-item>
            <el-button type="primary" @click="handleSearch">搜索</el-button>
         </el-form-item>
      </el-form>
   </div>
   <div class="table">
      <el-table :data="tableData" style="width: 100%">
         <el-table-column v-for="item in tableLabel" :key="item.prop" :width="item.width ? item.width : 125" :prop="item.prop" :label="item.label" />
         <el-table-column fixed="right" label="Operations" min-width="120" class="operation">
            <template #default="scope" style="display: flex">
               <el-button type="primary" size="small" @click="handleClick(scope.row)" class="edit">编辑</el-button>
               <el-button type="primary" size="small" class="delete">删除</el-button>
            </template>
         </el-table-column>
      </el-table>
      <el-pagination class="pager" background layout="prev, pager, next" :total="config.total" style="margin-top: 10px" @current-change="handleChange" />
   </div>
</template>

<script setup>
   import { ref, reactive, getCurrentInstance, onMounted } from 'vue';

   const { proxy } = getCurrentInstance();
   const tableData = ref([]);
   const config = reactive({
      name: '',
      total: 0,
      page: 1,
   });

   const getUserDataList = async () => {
      let data = await proxy.$api.getUserData(config);
      console.log(data);
      tableData.value = data.list.map((item) => ({
         ...item,
         sexLabel: item.sex === 1 ? '男' : '女',
      }));
      config.total = data.count;
   };
   const handleChange = (pager) => {
      config.page = pager;
      getUserDataList();
   };

   const formInline = reactive({
      keyWord: '',
   });
   const handleSearch = () => {
      config.name = formInline.keyWord;
      getUserDataList();
   };

   const tableLabel = reactive([
      {
         prop: 'name',
         label: '姓名',
      },
      {
         prop: 'age',
         label: '年龄',
      },
      {
         prop: 'sexLabel',
         label: '性别',
      },
      {
         prop: 'birth',
         label: '出生日期',
         width: 200,
      },
      {
         prop: 'addr',
         label: '地址',
         width: 400,
      },
   ]);
   onMounted(() => {
      getUserDataList();
   });
</script>

<style scoped lang="less">
   .user-header {
      display: flex;
      justify-content: space-between;
   }
   .table {
      position: relative;
      height: 520px;
      .pager {
         position: absolute;
         right: 10px;
         bottom: 30px;
      }
      .el-table {
         width: 100%;
         height: 500px;
      }
   }
</style>
