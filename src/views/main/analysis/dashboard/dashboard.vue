<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="8">
        <card>
          <template #card>
            <echarts_one></echarts_one>
          </template> </card
      ></el-col>
      <el-col :span="8">
        <card>
          <template #card>
            <echarts_two></echarts_two>
          </template> </card
      ></el-col>
      <el-col :span="8">
        <card>
          <template #card> <echarts_three></echarts_three> </template></card
      ></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="12">
        <card>
          <template #card> <echarts_four></echarts_four> </template></card
      ></el-col>
      <el-col :span="12">
        <card>
          <template #card> <echarts_five></echarts_five> </template></card
      ></el-col>
    </el-row>
  </div>
</template>

<script>
import card from "@/components/card/card.vue";
import echarts_one from "@/components/echarts/echarts_one.vue";
import echarts_two from "@/components/echarts/echarts_two.vue";
import echarts_three from "@/components/echarts/echarts_three.vue";
import echarts_four from "@/components/echarts/echarts_four.vue";
import echarts_five from "@/components/echarts/echarts_five.vue";
export default {
  components: {
    echarts_five,
    card,
    echarts_one,
    echarts_two,
    echarts_three,
    echarts_four,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
