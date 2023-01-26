<template>
  <div>
    <tableTransfer
      pageName="menu"
      :tableContent="tableContent"
      :childrenProps="childrenProps"
      urlList="menu"
    >
      <template #operation="scope">
        <div>
          <el-link
            type="primary"
            style="margin-right: 10px"
            @click="compile(scope.scope.row)"
            >编辑</el-link
          >
          <el-link type="danger" @click="deleats(scope.scope.row)"
            >删除</el-link
          >
        </div>
      </template>
      <template #ss>
        <div style="display: none;"></div>
      </template>
    </tableTransfer>
  </div>
</template>

<script>
import { contentTableConfig } from "./config/content";
import tableTransfer from "@/transfer/table-transfer.vue";
export default {
  components: { tableTransfer },
  data() {
    return {
      childrenProps: contentTableConfig.childrenProps,
      tableContent: contentTableConfig.propList,
    };
  },
};
</script>

<style lang="scss" scoped></style>
