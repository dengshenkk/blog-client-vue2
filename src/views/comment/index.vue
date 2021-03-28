<template>
  <div class="comment-wrap">
    <div>
      <el-button @click="dialogVisible = true">新增评论</el-button>
    </div>
    <el-table :data="tableData">
      <el-table-column
        v-for="col of columns"
        :key="col.id"
        v-bind="{ ...col }"
      ></el-table-column>
    </el-table>

    <el-dialog :visible.sync="dialogVisible" title="创建评论">
      <el-form ref="form" :model="form" label-width="100px">
        <el-form-item label="评论名称">
          <el-input v-model="form.commentName" autocomplete="off"></el-input>
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
import { createComment, queryCommentPage } from '@/api/comment'

export default {
  name: 'index',
  data() {
    return {
      columns: [
        {
          label: '评论名称',
          prop: 'commentName'
        },
        {
          label: '创建日期',
          prop: 'createAt'
        }
      ],
      tableData: [],

      dialogVisible: false,
      form: {
        commentName: ''
      }
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      queryCommentPage({
        pageNum: 1,
        pageSize: 20
      }).then((res) => {
        this.tableData = res.data.data
      })
    },
    handleCreate() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          createComment({ ...this.form }).then(() => {
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
