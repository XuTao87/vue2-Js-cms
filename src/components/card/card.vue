<template>
  <div class="card">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>{{ title }}</span>
      </div>
      <div :style="{ height: heights }">
        <slot name="card">默认内容</slot>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: () => {
        return "默认";
      },
    },
    heights: {
      type: String,
      default: () => {
        return "255px";
      },
    },
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.card {
  margin-bottom: 20px;
}
</style>
