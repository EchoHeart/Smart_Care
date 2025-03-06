<template>
  <div class="home-view">
    <el-header style="height: 70px;">
      <span class="title">"智慧护理"画像分析和推荐平台</span>
      <div>
        <span style="margin-right: 16px;">你好，{{ userName }}</span>
        <el-tooltip effect="dark" placement="bottom" content="消息提示">
          <i class="icon el-icon-bell">
            <div class="dot"></div>
          </i>
        </el-tooltip>
        <el-tooltip v-if="$store.state.loginInfo['role'] === 'admin'" effect="dark" placement="bottom" content="权限管理">
          <i class="icon el-icon-s-operation"></i>
        </el-tooltip>
        <el-tooltip effect="dark" placement="bottom" content="账号管理">
          <i class="icon el-icon-user"></i>
        </el-tooltip>
        <el-tooltip effect="dark" placement="bottom" content="系统设置">
          <i class="icon el-icon-setting"></i>
        </el-tooltip>
        <el-tooltip effect="dark" placement="bottom" content="退出">
          <i class="icon el-icon-switch-button" @click="exit"></i>
        </el-tooltip>
      </div>
    </el-header>
    <el-container>
      <el-aside style="width: 250px;">
        <el-menu class="el-menu-vertical-demo" default-active="1">
          <template v-for="(val, key, idx) in menuInfo">
            <el-menu-item v-if="val.subMenuList.length === 0" :index="`${idx+1}`" :key="key" @click="$router.push(val.to)">
              <i :class="val.iconClass"></i>
              <span slot="title">{{ key }}</span>
            </el-menu-item>
            <el-submenu v-else :index="`${idx+1}`" :key="key">
              <template slot="title">
                <i :class="val.iconClass"></i>
                <span slot="title">{{ key }}</span>
              </template>
              <el-menu-item v-for="([icon, name, to], menuIdx) in val.subMenuList" :key="name" :index="`${idx+1}-${menuIdx+1}`" @click="$router.push(to)">
                <i :class="icon"></i>
                <span slot="title">{{ name }}</span>
              </el-menu-item>
            </el-submenu>
          </template>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
      userName: this.$store.state.loginInfo['userName'],
      menuInfo: {}
    }
  },
  created() {
    switch(this.$store.state.loginInfo['role']) {
      case 'admin':
        this.menuInfo = {
          '订单管理': {
            iconClass: 'el-icon-s-order',
            subMenuList: [],
            to: '/home/order'
          },
          '护工模块': {
            iconClass: 'el-icon-s-custom',
            subMenuList: [
              ['el-icon-edit', '信息管理', '/home/nurse/info'],
              ['el-icon-pie-chart', '群画像分析', '/home/nurse/group-portrait'],
              ['el-icon-tickets', '个体画像分析', '/home/nurse/single-portrait']
            ]
          },
          '患者模块': {
            iconClass: 'el-icon-s-custom',
            subMenuList: [
              ['el-icon-edit', '信息管理', '/home/patient/info'],
              ['el-icon-s-data', '群画像分析', '/home/patient/group-portrait'],
              ['el-icon-share', '个体画像分析', '/home/patient/single-portrait']
            ]
          },
          '匹配推荐': {
            iconClass: 'el-icon-s-opportunity',
            subMenuList: [],
            to: '/home/recommand'
          },
        }
        break
      case 'nursePlatform':
        this.menuInfo = {
          '订单管理': {
            iconClass: 'el-icon-s-order',
            subMenuList: []
          },
          '护工管理': {
            iconClass: 'el-icon-edit',
            subMenuList: []
          },
          '护工群画像': {
            iconClass: 'el-icon-s-data',
            subMenuList: []
          },
          '护工个体画像': {
            iconClass: 'el-icon-share',
            subMenuList: []
          }
        }
        break
      case 'hospital':
        this.menuInfo = {
          '订单管理': {
            iconClass: 'el-icon-s-order',
            subMenuList: []
          },
          '患者管理': {
            iconClass: 'el-icon-edit',
            subMenuList: []
          },
          '患者群画像': {
            iconClass: 'el-icon-s-data',
            subMenuList: []
          },
          '患者个体画像': {
            iconClass: 'el-icon-share',
            subMenuList: []
          }
        }
        break
    }
  },
  methods: {
    exit() {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
.home-view {
  height: 100vh;
}

.el-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #409EFF;
  background-color: #259174;
  color: white;

  .title {
    font-size: 20px;
  }

  .icon {
    height: 30px;
    width: 30px;
    font-size: 18px;
    text-align: center;
    line-height: 30px;
    margin: 0 4px;
    position: relative;

    .dot {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background-color: red;

      position: absolute;
      left: 24px;
      top: 2px;
    }
  }
  .icon:hover {
    cursor: pointer;
    background-color: #025b41;
    border-radius: 10px;
  }
}

.el-container {
  height: calc(100vh - 70px);
}

.el-menu {
  border-right: 0px;
}
  
.el-menu-item.is-active {
    color: #00b280;
    background-color: #e5f9f4;
    border-right: 2px solid #00b280;
}
</style>
