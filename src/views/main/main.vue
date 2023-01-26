<template>
  <div class="main">
    <el-container style="height: 100%">
      <el-aside :style="{ width: iconShow === true ? '200px' : '70px' }">
        <mains :iconShow="iconShow"></mains>
      </el-aside>
      <el-container>
        <el-header><navheader @showClick="showClick"></navheader></el-header>
        <el-main style="padding: 20px"><router-view></router-view></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import mains from "@/components/nav-main/main.vue";
import navheader from "@/components/nav-header/index.vue";
export default {
  components: { mains, navheader },
  data() {
    return {
      iconShow: true,
    };
  },
  mounted() {},
  computed: {},
  methods: {
    showClick(v) {
      this.$nextTick(() => {
        this.iconShow = v;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.main {
  height: 100%;
}
.el-main {
  padding: 0;
}
.el-header {
  padding: 0;
}
</style>
