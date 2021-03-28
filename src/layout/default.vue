<template>
  <div class='layout-default-wrap'>
    <el-container>
      <el-header>
        <el-button @click='handleLogout'>登 出</el-button>
      </el-header>
      <el-container>
        <el-aside width='200px'>
          <el-menu class='el-menu-vertical-demo' default-active='2' router>
            <el-menu-item index='article'>
              <i class='el-icon-menu'></i>
              <span slot='title'>文章</span>
            </el-menu-item>
            <el-menu-item index='tag'>
              <i class='el-icon-document'></i>
              <span slot='title'>标签</span>
            </el-menu-item>
            <el-menu-item index='category'>
              <i class='el-icon-setting'></i>
              <span slot='title'>分类</span>
            </el-menu-item>
            <el-menu-item index='comment'>
              <i class='el-icon-setting'></i>
              <span slot='title'>评论</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'default',
  methods: {
    async handleLogout () {
      await this.$store.commit('LOGOUT')
    }
  }
}
</script>

<style scoped>

</style>
