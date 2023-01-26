<template>
  <div class="user">
    <tableTransfer
      :tableContent="tableContent"
      pageName="user"
      ref="tableTransferRef"
      :config="selectObj"
      :colLayout="colLayout"
      :search="search"
      :obj="obj"
      urlList="role"
    >
      <template #enable="scope">
        <div>
          <el-tag :type="scope.scope.row.enable === 1 ? '' : 'danger'">{{
            scope.scope.row.enable === 1 ? "启用" : "禁用"
          }}</el-tag>
        </div>
      </template>
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
      <template #user>
        <el-button @click="add" type="primary" style="margin: 20px"
          >新建用户</el-button
        >
      </template>
    </tableTransfer>
    <diolag
      ref="diolagRef"
      :config="config"
      :obj="addobj"
      :colLayout="colLayout"
      @delet="delet"
      @sumbits="sumbits"
    >
      <template #tree>
        <el-tree
          style="padding: 0 75px"
          :props="{ children: 'children', label: 'name' }"
          show-checkbox
          :data="treeData"
          @check="currentChange"
          node-key="id"
          ref="trees"
        >
        </el-tree>
      </template>
    </diolag>
  </div>
</template>

<script>
import { config } from "./config/config";
import { search } from "./config/search";
import { contentTableConfig } from "./config/content";
import tableTransfer from "@/transfer/table-transfer.vue";
import diolag from "@/components/diolag/diolag.vue";
import loacl from "@/utile/loacl";
import { mens } from "@/utile/men";
export default {
  name: "role",
  components: { tableTransfer, diolag },
  data() {
    return {
      search: search.formItems,
      obj: {},
      addobj: {},
      tableContent: contentTableConfig.propList,
      config: config.obj,
      colLayout: config.colLayout,
      treeData: loacl.getCache("menus"),
      nodeList: [],
    };
  },
  computed: {
    selectObj() {
      const departList = this.$store.state.menuss.departmentList;
      const roleList = this.$store.state.menuss.roleList;
      this.config.forEach((item) => {
        if (item.field === "departmentId") {
          item.options = departList;
        } else if (item.field === "roleId") {
          item.options = roleList;
        }
      });
      return this.config;
    },
  },
  methods: {
    // 打开弹窗
    add() {
      this.config = config.obj;
      this.$refs.diolagRef.opens("新增");
      this.$nextTick(() => {
        this.$refs.trees.setCheckedKeys([]);
      });
    },
    // 清除
    delet(v) {
      this.addobj = {};
    },
    // 编辑
    compile(v) {
      const value = JSON.parse(JSON.stringify(v));
      this.$refs.diolagRef.opens("编辑");
      this.addobj = {
        ...v,
      };
      this.$nextTick(() => {
        this.$refs.trees.setCheckedKeys(mens(v.menuList));
      });
    },
    // 删除
    deleats(v) {
      if (v) {
        this.$store.dispatch("menuss/deleatUsers", v.id);
      }
    },
    // 获取节点
    currentChange(v, c) {
      console.log(c.halfCheckedKeys);
      this.nodeList = [...c.checkedKeys, ...c.halfCheckedKeys];
    },
    sumbits(text, obj) {
      if (text === "新增") {
        this.$store.dispatch("menuss/applyUser", {
          ...obj,
          menuList: this.nodeList,
        });
      } else if (text === "编辑") {
        const objs = {
          id: obj.id,
          name: obj.name,
          intro: obj.intro,
          menuList: this.nodeList,
        };
        this.$store.dispatch("menuss/compileUsers", { ...objs });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.user {
  width: 100%;
  background-color: #ffff;
}
</style>
