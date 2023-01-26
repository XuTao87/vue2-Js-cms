<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item
        :to="{ path: item.path }"
        v-for="(item, index) in crumbs"
        :key="index"
        >{{ item.name }}</el-breadcrumb-item
      >
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  props: ["crumbs"],
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
