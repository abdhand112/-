<template>
  <div class="about">
    <el-container>
      <el-aside width="200px">
        <el-menu active-text-color="#7596d9" background-color="#fff" class="el-menu-vertical-demo" default-active="2"
          text-color="#000" router>
          <el-menu-item index="/gzt">
            <el-icon><icon-menu /></el-icon>
            <span>工作台</span>
          </el-menu-item>
          <el-sub-menu index="1">
            <template #title>
              <el-icon>
                <location />
              </el-icon>
              <span>园区管理</span>
            </template>
            <el-menu-item index="1-1">item one</el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="2">
            <template #title>
              <el-icon>
                <location />
              </el-icon>
              <span>行车管理</span>
            </template>
            <el-menu-item index="1-2">区域管理</el-menu-item>
            <el-menu-item index="/ykgl">月卡管理</el-menu-item>
            <el-menu-item index="1-3">停车缴费管理</el-menu-item>
            <el-menu-item index="1-4">计费规则管理</el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="3">
            <template #title>
              <el-icon>
                <location />
              </el-icon>
              <span>一体杆管理</span>
            </template>
            <el-menu-item index="1-1">item one</el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="4">
            <template #title>
              <el-icon>
                <location />
              </el-icon>
              <span>系统管理</span>
            </template>
            <el-menu-item index="1-1">item one</el-menu-item>
          </el-sub-menu>

        </el-menu>
      </el-aside>
      <el-main>
        <p class="top">
          <el-button>打开大屏</el-button>
          管理员
        </p>
        <router-view style="background-color: #fff; height: 100vh;"></router-view>
      </el-main>
    </el-container>
  </div>
</template>
<script setup lang='ts'>


</script>
<style lang='scss' scoped>
.el-main {
  height: 100%;
  background-color: #f4f6f8;

  .top {
    width: 100%;
    text-align: right;
  }
}

.el-aside {
  height: 100%;

}
</style>