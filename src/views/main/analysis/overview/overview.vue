<template>
  <div>
    <card title="关于" heights="20px">
      <template #card>
        <div>
          Vue2Admin 是基于 Vue2、Vuex、VueRouter、 ElementUi 、Echart5
          等后台系统解决方案。
        </div>
      </template>
    </card>
    <card title="技术栈" heights="440px">
      <template #card>
        <div>
          <li
            v-for="item in arr"
            :key="item.name"
            style="font-size: 20px; padding: 10px 0px"
          >
            <span>{{ item.name }}：</span>
            <el-link target="_blank" style="font-size: 20px">{{
              item.names
            }}</el-link>
          </li>
        </div>
      </template>
    </card>
  </div>
</template>

<script>
import card from "@/components/card/card.vue";

export default {
  components: {
    card,
  },
  data() {
    return {
      arr: [
        { name: "开发工具", names: "Visual Studio Code" },
        { name: "编程语言", names: "JavaScript" },
        { name: "构建工具", names: "WebPack" },
        { name: "前端框架", names: "Vue2" },
        { name: "路由工具 ", names: "Vue Router 3.6" },
        { name: "状态管理", names: "Vuex" },
        { name: "UI 框架 ", names: "ElementUi 2.8.2" },
        { name: "可视化", names: "Echarts 5.4.1" },
        { name: "CSS 预编译", names: "Sass / Less" },
        { name: "HTTP 工具", names: "Axios" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
