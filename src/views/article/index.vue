<template>
  <div class="article-wrap">
    <div>
      <el-button @click="dialogVisible = true">新增文章</el-button>
    </div>
    <el-table :data="tableData">
      <el-table-column
        v-for="col of columns"
        :key="col.id"
        v-bind="{ ...col }"
      ></el-table-column>
    </el-table>

    <el-dialog :visible.sync="dialogVisible" title="创建文章">
      <el-form ref="form" :model="form" label-width="100px">
        <el-form-item label="标题">
          <el-input v-model="form.title" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="内容">
          <el-input v-model="form.content" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="小结">
          <el-input v-model="form.summary" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item label="封面">
          <el-input v-model="form.coverURL" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item label="标签">
          <el-select v-model="form.tags" multiple>
            <el-option
              v-for="item of tags"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="分类">
          <el-select v-model="form.category">
            <el-option
              v-for="item of categories"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
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
import { createArticle, queryArticle } from '@/api/article'
import { queryTagAll } from '@/api/tag'
import { queryCategoryAll } from '@/api/category'

function useTransitionToSelect(data, label, value) {
  return data.map((item) => {
    return {
      label: item[label],
      value: item[value]
    }
  })
}

export default {
  name: 'index',
  data() {
    return {
      columns: [
        {
          label: '标题',
          prop: 'title'
        },
        {
          label: '内容',
          prop: 'content'
        },
        {
          label: '小结',
          prop: 'summary'
        },
        {
          label: '分类',
          prop: 'category'
        },
        {
          label: '标签',
          prop: 'tags'
        },
        {
          label: '创建日期',
          prop: 'createAt'
        }
      ],
      tableData: [],

      dialogVisible: false,
      tags: [],
      categories: [],
      form: {
        title: '',
        content: '',
        summary: '',
        coverURL: '',
        tags: '',
        category: ''
      }
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      queryTagAll().then((res) => {
        this.tags = useTransitionToSelect(res.data, 'tagName', 'id')
      })

      queryCategoryAll().then((res) => {
        this.categories = useTransitionToSelect(res.data, 'categoryName', 'id')
      })
      queryArticle({
        pageSize: 20,
        pageNum: 1
      }).then((res) => {
        this.tableData = res.data.data.map((item) => {
          item.tags = item.tags.map((item) => item.tagName).join('/')
          item.category = item.category.categoryName
          return item
        })
      })
    },
    handleCreate() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          createArticle({ ...this.form }).then(() => {
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
