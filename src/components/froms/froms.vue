<template>
  <div class="froms">
    <el-form :label-width="labelWidth" :model="obj" ref="elFormRef">
      <el-row :gutter="20">
        <el-col v-for="item in search" :key="item.id" v-bind="colLayout">
          <template v-if="item.type === 'input' || item.type === 'password'">
            <el-form-item :label="item.label">
              <el-input
                :show-password="item.type === 'password' ? true : false"
                style="width: 100%"
                :placeholder="item.placeholder"
                v-model="obj[item.field]"
              ></el-input
            ></el-form-item>
          </template>
          <template v-if="item.type === 'select'">
            <el-form-item :label="item.label">
              <el-select
                :placeholder="item.placeholder"
                style="width: 100%"
                v-model="obj[item.field]"
              >
                <el-option
                  v-for="bin in item?.options"
                  :key="bin.value"
                  :label="bin.name"
                  :value="bin.id"
                >
                </el-option>
              </el-select>
            </el-form-item>
          </template>
          <template v-if="item.type === 'datepicker'">
            <el-form-item :label="item.label">
              <el-date-picker
                style="width: 100%"
                v-model="obj[item.field]"
                type="daterange"
                range-separator="To"
                start-placeholder="Start date"
                end-placeholder="End date"
              />
            </el-form-item>
          </template>
        </el-col>
      </el-row>
    </el-form>
    <slot name="btn"> </slot>
  </div>
</template>

<script>
export default {
  name: "froms",
  props: {
    search: {
      type: Array,
      default: () => [],
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
    labelWidth: {
      type: String,
      default: "70px",
    },
    obj: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {};
  },
  methods: {
    btnRest() {
      for (const key in this.obj) {
        this.obj[key] = "";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
::v-deep .el-row {
  margin: 0 !important;
}
.froms {
  padding: 20px;
}
</style>
