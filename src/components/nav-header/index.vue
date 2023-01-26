<template>
  <div class="nav-header">
    <div class="content">
      <div style="display: flex; align-items: center">
        <i
          :class="iconShow ? 'el-icon-s-fold' : 'el-icon-s-unfold'"
          style="font-size: 30px; cursor: pointer; margin-right: 10px"
          @click="iconClic"
        ></i>
        <bread :crumbs="information"></bread>
      </div>
      <div>
        <div style="display: flex; align-items: center">
          <img
            :src="circleUrl"
            alt=""
            style="
              width: 50px;
              height: 50px;
              border-radius: 50px;
              margin-right: 10px;
              overflow: hidden;
            "
          />
          <el-dropdown>
            <span class="el-dropdown-link">
              您说的对<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item
                ><div @click="add">去往主页</div></el-dropdown-item
              >
              <el-dropdown-item divided
                ><div @click="tc">退出登录</div></el-dropdown-item
              >
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import bread from "../nav-bread/bread.vue";
import { crumbs } from "../../utile/crumbs";
import loacl from "@/utile/loacl";
export default {
  components: { bread },
  data() {
    return {
      crumbs: [],
      circleUrl: "https://xutao.cool/benchi.jpg",
      iconShow: true,
    };
  },
  created() {},
  mounted() {},
  computed: {
    information() {
      return crumbs(this.$route.path, this.$store.state.menus);
    },
  },
  methods: {
    iconClic() {
      this.$nextTick(() => {
        this.iconShow = !this.iconShow;
        this.$emit("showClick", this.iconShow);
      });
    },
    add() {
      console.log(1);
      window.open("https://xutao.cool/", "_blank");
    },
    tc() {
      loacl.clearCache();
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped lang="scss">
.nav-header {
  width: 100%;
  background-color: #ffff;
  height: 100%;
  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    padding: 0 20px;
  }
}
</style>
