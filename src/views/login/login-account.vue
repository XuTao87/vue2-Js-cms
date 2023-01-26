<template>
  <div class="login-from">
    <el-form label-width="55px" :model="users" :rules="rules" ref="ruleForm">
      <el-form-item label="账号" prop="name">
        <el-input v-model="users.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="users.password"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { rules } from "./config/account-config";
import local from "../../utile/loacl";
export default {
  data() {
    return {
      users: {
        name: "kobe",
        password: "123456",
      },
      rules: {},
    };
  },
  created() {
    this.verifyRules();
  },
  methods: {
    loginAction(boole) {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          if (boole) {
            local.setCache("name", this.users.name);
            local.setCache("password", this.users.password);
          }
          this.$store.dispatch("loginUsers", this.users);
        }
      });
    },
    verifyRules() {
      this.rules = { ...rules };
    },
  },
};
</script>

<style lang="scss" scoped>
.login-from {
  width: 300px;
}
</style>
