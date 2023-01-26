<template>
  <el-dialog
    :title="text"
    :visible.sync="dialogVisible"
    width="30%"
    @close="close"
    append-to-body
  >
    <froms :search="config" :obj="obj" :colLayout="colLayout"></froms>
    <slot name="tree"></slot>
    <span slot="footer" class="dialog-footer">
      <el-button @click="dialogVisible = false">取 消</el-button>
      <el-button type="primary" @click="sumbit">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
import froms from "../froms/froms.vue";
export default {
  name: "diolag",
  components: { froms },
  props: {
    config: {
      type: Array,
      default: () => [],
    },
    obj: {
      type: Object,
      default: () => {},
    },
    colLayout: {
      type: Object,
      default: () => ({
        xl: 8,
        lg: 8,
        md: 12,
        sm: 24,
        xs: 24,
      }),
    },
  },
  data() {
    return {
      dialogVisible: false,
      text: "",
    };
  },
  methods: {
    opens(text) {
      this.dialogVisible = true;
      this.text = text;
    },
    sumbit() {
      this.$emit("sumbits", this.text, this.obj);
      // if (this.text === "新增") {
      //   this.$store.dispatch("menuss/loginEstablishUser", this.obj);
      // } else if (this.text === "编辑") {
      //   this.$store.dispatch("menuss/compileUsers", this.obj);
      // }
      this.dialogVisible = false;
    },
    close() {
      this.$emit("delet", {});
    },
  },
};
</script>

<style lang="scss" scoped></style>
