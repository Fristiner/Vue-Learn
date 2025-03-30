<template>
   <div class="user-header">
      <el-button type="primary">新增</el-button>
      <el-form :inline="true">
         <el-form-item label="请输入">
            <el-input placeholder="请输入用户名"> </el-input>
         </el-form-item>
         <el-form-item>
            <el-button type="primary">搜索</el-button>
         </el-form-item>
      </el-form>
   </div>
   <div class="table">
      <el-table :data="tableData" style="width: 100%">
         <el-table-column fixed prop="date" label="Date" width="150" />
         <el-table-column prop="name" label="Name" width="120" />
         <el-table-column prop="state" label="State" width="120" />
         <el-table-column prop="city" label="City" width="120" />
         <el-table-column prop="address" label="Address" width="600" />
         <el-table-column prop="zip" label="Zip" width="120" />
         <el-table-column fixed="right" label="Operations" min-width="120">
            <template #default="scope">
               <el-button type="primary" size="small" @click="handleClick(scope.row)">编辑</el-button>
               <el-button type="primary" size="small">删除</el-button>
            </template>
         </el-table-column>
      </el-table>
   </div>
   <!-- 弹窗 -->
   <el-dialog v-model="dialogVisible" title="编辑用户信息">
      <el-form :model="editForm" label-width="100px">
         <el-form-item label="Date">
            <el-input v-model="editForm.date" />
         </el-form-item>
         <el-form-item label="Name">
            <el-input v-model="editForm.name" />
         </el-form-item>
         <el-form-item label="State">
            <el-input v-model="editForm.state" />
         </el-form-item>
         <el-form-item label="City">
            <el-input v-model="editForm.city" />
         </el-form-item>
         <el-form-item label="Address">
            <el-input v-model="editForm.address" />
         </el-form-item>
         <el-form-item label="Zip">
            <el-input v-model="editForm.zip" />
         </el-form-item>
      </el-form>
      <template #footer>
         <span class="dialog-footer">
            <el-button @click="dialogVisible = false">取消</el-button>
            <el-button type="primary" @click="saveEdit">保存</el-button>
         </span>
      </template>
   </el-dialog>
</template>

<script setup>
   import { ref, reactive } from 'vue';

   const handleClick = (row) => {
      dialogVisible.value = true;
      Object.assign(editForm, row);
   };

   const saveEdit = () => {
      // 保存编辑逻辑
      dialogVisible.value = false;
   };

   const dialogVisible = ref(false);
   const editForm = reactive({
      date: '',
      name: '',
      state: '',
      city: '',
      address: '',
      zip: '',
   });

   const tableData = [
      {
         date: '2016-05-03',
         name: 'Tom',
         state: 'California',
         city: 'Los Angeles',
         address: 'No. 189, Grove St, Los Angeles',
         zip: 'CA 90036',
         tag: 'Home',
      },
      {
         date: '2016-05-02',
         name: 'Tom',
         state: 'California',
         city: 'Los Angeles',
         address: 'No. 189, Grove St, Los Angeles',
         zip: 'CA 90036',
         tag: 'Office',
      },
      {
         date: '2016-05-04',
         name: 'Tom',
         state: 'California',
         city: 'Los Angeles',
         address: 'No. 189, Grove St, Los Angeles',
         zip: 'CA 90036',
         tag: 'Home',
      },
      {
         date: '2016-05-01',
         name: 'Tom',
         state: 'California',
         city: 'Los Angeles',
         address: 'No. 189, Grove St, Los Angeles',
         zip: 'CA 90036',
         tag: 'Office',
      },
   ];
</script>

<style scoped lang="less">
   .user-header {
      display: flex;
      justify-content: space-between;
   }
</style>
