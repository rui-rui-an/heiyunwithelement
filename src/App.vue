<template>
  <el-container class="app">
    <el-header class="header">黑米音乐</el-header>
    <el-container>
      <el-aside width="200px" class="aside">
        <!-- z左侧导航 -->
        <el-menu
          :default-active="$route.path"
          class="el-menu-vertical-demo"
          :router ='true'
        >
          <el-menu-item index="/recommendMusic">
            <i class="el-icon-platform-eleme"></i>
            <span slot="title">推荐音乐</span>
          </el-menu-item>
          <el-menu-item index="/findMusic">
            <i class="el-icon-eleme"></i>
            <span slot="title">发现音乐</span>
          </el-menu-item>
          <el-menu-item index="/musicMV">
            <i class="el-icon-video-camera-solid"></i>
            <span slot="title">MV地域</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main class="main">
        <!-- 路由出口 -->
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {};
</script>

// 全局样式
<style>
* {
  margin: 0;
  padding: 0;
}
html,
body {
  height: 100%;
}
</style>
// 局部样式
<style scoped>
.app {
  width: 100%;
  height: 100%;
}
.header {
  background-color: #ccc;
  text-align: center;
  line-height: 60px;
  font-size: 20px;
}
.aside {
  height: 100%;
  background-color: #ccc;
}
.main {
  height: 100%;
}
</style>