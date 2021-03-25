<template>
  <div class="category-wrap">
    <div>
      <el-button @click="dialogVisible = true">新增分类</el-button>
    </div>
    <el-table :data="tableData">
      <el-table-column
        v-for="col of columns"
        :key="col.id"
        v-bind="{ ...col }"
      ></el-table-column>
    </el-table>

    <el-dialog :visible.sync="dialogVisible" title="创建分类">
      <el-form ref="form" :model="form" label-width="100px">
        <el-form-item label="分类名称">
          <el-input v-model="form.categoryName" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleCreate">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { createCategory, queryCategoryPage } from '@/api/category'

export default {
  name: 'index',
  data() {
    return {
      columns: [
        {
          label: '分类名称',
          prop: 'categoryName'
        },
        {
          label: '创建日期',
          prop: 'createAt'
        }
      ],
      tableData: [],

      dialogVisible: false,
      form: {
        categoryName: ''
      }
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      queryCategoryPage({
        pageNum: 1,
        pageSize: 20
      }).then((res) => {
        this.tableData = res.data.data
      })
    },
    handleCreate() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          createCategory({ ...this.form }).then(() => {
            this.$message.success('操作成功')
            this.dialogVisible = false
            this.init()
          })
        }
      })
    }
  }
}
</script>

<style scoped></style>
