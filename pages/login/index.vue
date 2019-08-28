<template>
  <div class="login-wrap">
    <el-card shadow="never">
      <el-form @submit.native.prevent>
        <el-form-item label="E-Posta">
          <el-input placeholder="E-Posta Adresi" v-model="user.email"></el-input>
        </el-form-item>
        <el-form-item label="Şifre">
          <el-input placeholder="Şifre" v-model="user.password" type="password"></el-input>
        </el-form-item>
      </el-form>
      <el-button type="warning" size="small" native-type="submit" @click="moduleLogin" block plain>Giriş</el-button>
    </el-card>
    <nuxt-link to="/panel">Panel'e git</nuxt-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user : {
        email: "",
        password: "",
      },
    };
  },

  methods: {
    moduleLogin() {
      this.$store.dispatch('loginModule/getLogin', this.user).then((result) => {
        this.modalPopup(this.$store.state.loginModule.modal.status, this.$store.state.loginModule.modal.message);
      });
    },
    modalPopup(status, message) {
        if(status) {
          this.$alert(message, status, {
            confirmButtonText: 'Tamam',
          });
          this.$store.state.loginModule.modal.status = false;
        }
      }
  }
};
</script>

<style scoped>
</style>