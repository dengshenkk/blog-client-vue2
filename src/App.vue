<template>
  <div id="app">
    <el-container>
      <!--<el-header>Header</el-header>-->
      <el-container>
        <el-aside width="200px">
          <el-menu default-active="2" class="el-menu-vertical-demo" router>
            <el-menu-item index="article">
              <i class="el-icon-menu"></i>
              <span slot="title">文章</span>
            </el-menu-item>
            <el-menu-item index="tag">
              <i class="el-icon-document"></i>
              <span slot="title">标签</span>
            </el-menu-item>
            <el-menu-item index="category">
              <i class="el-icon-setting"></i>
              <span slot="title">分类</span>
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

<style lang="scss">
#app {
}

#nav {
  display: flex;
  flex-direction: column;
  height: 40px;
  align-items: center;
  justify-items: flex-start;
}
</style>
