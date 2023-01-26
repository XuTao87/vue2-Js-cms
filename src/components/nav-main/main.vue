<template>
  <div class="ss">
    <div
      style="background-color: #001529 !important; color: #fff; display: flex;padding: 20px 40px;"
    >
      <img src="https://cn.vuejs.org/logo.svg" alt="" style="width: 30px" />
      <div style="display: flex; align-items: center; margin-left: 5px">
        Vue2
      </div>
    </div>
    <el-menu
      class="el-menu-vertical"
      background-color="#0c2135"
      text-color="#b7bdc3"
      active-text-color="#0a60bd"
      :unique-opened="true"
      :default-active="num"
      :collapse="!iconShow"
    >
      <div v-for="item in menuList" :key="item.id">
        <el-submenu :index="item.name.toString()">
          <template slot="title">
            <i :class="item.icon"></i>
            <span v-if="iconShow">{{ item.name }}</span>
          </template>
          <template v-if="item.children">
            <el-menu-item-group v-for="bin in item.children" :key="bin.name">
              <el-menu-item :index="bin.id.toString()" @click="add(bin)">{{
                bin.name
              }}</el-menu-item>
            </el-menu-item-group>
          </template>
        </el-submenu>
      </div>
    </el-menu>
  </div>
</template>

<script>
import { crumbs } from "../../utile/crumbs";
import router from "@/router";
export default {
  props: {
    iconShow: {
      type: Boolean,
      default: () => {
        return false;
      },
    },
  },
  data() {
    return {
      menuList: [],
      num: "",
    };
  },
  created() {
    this.initializedMenu();
  },

  watch: {
    $route: {
      // $route可以用引号，也可以不用引号  监听的对象
      handler(to, from) {
        this.num = crumbs(
          this.$route.path,
          this.$store.state.menus
        )[1]?.id.toString();
      },
      deep: true, // 深度观察监听 设置为 true
      immediate: true,
    },
  },
  methods: {
    initializedMenu() {
      if (this.$store.state.menus) {
        this.menuList = this.$store.state.menus;
      }
    },
    add(item) {
      router.push(item.url).catch((err) => err);
    },
  },
};
</script>

<style lang="scss" scoped>
.ss {
  height: 100%;
  overflow: hidden;
  .el-menu-vertical {
    height: 100%;
  }
}
.el-menu {
  border-right: none;
}
::v-deep .el-menu-item-group__title {
  padding: 0 !important;
}
// ::v-deep .el-submenu__icon-arrow {
//   display: var(--show);
// }
// 目录
.el-submenu {
  background-color: #001529 !important;
  // 二级菜单 ( 默认背景 )
  .el-menu-item {
    padding-left: 50px !important;
    background-color: #0c2135 !important;
  }
}

::v-deep .el-submenu__title {
  background-color: #001529 !important;
}

// hover 高亮
.el-menu-item:hover {
  color: #fff !important; // 菜单
}

.el-menu-item.is-active {
  color: #fff !important;
  background-color: #0a60bd !important;
}
</style>
