<template>
  <div class="tabels">
    <el-table :data="userList" style="width: 100%" v-bind="childrenProps" row-key="id">
      <el-table-column
        type="index"
        label="序号"
        align="center"
        v-if="childrenProps.index"
      ></el-table-column>
      <el-table-column
        align="center"
        v-for="item in tableContent"
        :key="item.name"
        :prop="item.prop"
        :label="item.label"
        :min-width="item.minWith"
      >
        <template scope="scope">
          <slot :name="item.prop" :row="scope.row">
            {{ scope.row[item.prop] }}
          </slot>
        </template>
      </el-table-column>
    </el-table>
    <div
      style="display: flex; justify-content: end; padding: 20px 0"
      v-if="childrenProps.pageShow"
    >
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :page-sizes="[5, 10, 20, 30]"
        :page-size="page.pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="totals"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  model: {
    prop: "page",
    event: "click",
  },
  props: {
    tableContent: {
      type: Array,
      default: () => [],
    },
    page: {
      type: Object,
      default: () => {
        return {
          currentPage: 0,
          pageSize: 5,
        };
      },
    },
    childrenProps: {
      type: Object,
      default: () => ({ pageShow: true, index: true }),
    },
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {
    handleSizeChange(pageSize) {
      this.$emit("click", { ...this.$props.page, pageSize });
    },
    handleCurrentChange(currentPage) {
      console.log(currentPage);
      this.$emit("click", { ...this.$props.page, currentPage });
    },
  },
  computed: {
    userList() {
      return this.$store.state.menuss.usersList;
    },
    totals() {
      return this.$store.state.menuss.usersCount;
    },
  },
};
</script>

<style lang="scss" scoped>
.tabels{
  border-top: 20px solid #f0f2f5;
}
</style>
