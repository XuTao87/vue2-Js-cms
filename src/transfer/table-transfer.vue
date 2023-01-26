<template>
  <div>
    <slot name="ss">
      <froms :search="search" :obj="obj" ref="froms"> </froms>
      <div style="display: flex; justify-content: end; margin: 0 30px">
        <el-button type="primary" @click="ss">搜索</el-button>
        <el-button @click="rest">重置</el-button>
      </div>
    </slot>
    <slot :name="pageName"> </slot>
    <tabel
      :tableContent="tableContent"
      v-model="page"
      :childrenProps="childrenProps"
    >
      <template
        v-for="item in tableContent"
        #[item.prop]="scope"
        :row="scope.row"
      >
        <slot :name="item.prop" :scope="scope"></slot>
      </template>
    </tabel>
  </div>
</template>

<script>
import tabel from "@/components/tabel/tabel.vue";
import froms from "@/components/froms/froms.vue";
export default {
  components: { tabel, froms },
  props: [
    "tableContent",
    "pageName",
    "search",
    "obj",
    "urlList",
    "childrenProps",
  ],
  data() {
    return {
      page: { currentPage: 1, pageSize: 5 },
    };
  },
  created() {
    this.userLists();
  },
  watch: {
    page: {
      handler: function (page) {
        this.$store.dispatch("menuss/loginUsers", {
          pages: {
            offset: (page.currentPage - 1) * page.pageSize,
            size: page.pageSize,
          },
          url: this.$props.urlList,
        });
      },
      deep: true,
    },
  },
  methods: {
    userLists() {
      this.$store.dispatch("menuss/loginUsers", {
        pages: { offset: 0, size: 5 },
        url: this.$props.urlList,
      });
      this.$store.dispatch("menuss/loginDepartmentList");
    },
    // 搜索
    ss() {
      this.$store.dispatch("menuss/loginUsers", {
        pages: { offset: 0, size: 5, ...this.$props.obj },
        url: this.$props.urlList,
      });
    },
    // 重置
    rest() {
      this.$refs.froms.btnRest();
      this.$store.dispatch("menuss/loginUsers", {
        pages: { offset: 0, size: 5 },
        url: this.$props.urlList,
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
