<template>
  <div class="login">
    <div class="logins">
      <div style="margin-bottom: 120px">
        <h1 class="title">后台管理系统Vue2</h1>
        <el-tabs type="border-card" stretch>
          <el-tab-pane
            ><span slot="label"
              ><i style="margin-right: 5px" class="el-icon-user"></i
              >账号登录</span
            ><loginAccount ref="loginAccountRef"></loginAccount
          ></el-tab-pane>
          <el-tab-pane disabled
            ><span slot="label"
              ><i style="margin-right: 5px" class="el-icon-mobile-phone"></i
              >手机登录</span
            >用户管理</el-tab-pane
          >
        </el-tabs>
        <div class="logins_2">
          <el-checkbox v-model="remePassword">记住密码</el-checkbox>
          <el-link type="primary">忘记密码</el-link>
        </div>
        <el-button
          type="primary"
          style="width: 100%; margin-top: 10px"
          @click="login"
          >立即登录</el-button
        >
      </div>
    </div>
  </div>
</template>

<script>
import loginAccount from "./login-account.vue";
export default {
  components: { loginAccount },
  data() {
    return {
      remePassword: true,
    };
  },
  mounted() {
    console.log(process.env);
  },
  methods: {
    login() {
      this.$refs.loginAccountRef.loginAction(this.remePassword);
    },
  },
};
</script>

<style lang="scss" scoped>
.login {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("../../assets/img/bg.a2d1cf1a.svg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  .title {
    text-align: center;
  }
  .logins_2 {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
  }
}
</style>
