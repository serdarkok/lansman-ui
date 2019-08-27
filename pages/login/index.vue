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
      <el-button type="warning" size="small" native-type="submit" @click="getLogin" block plain>Giriş</el-button>
    </el-card>
    <nuxt-link to="/panel">Panel'e git</nuxt-link>
      <button @click="$store.commit('increment')">{{ $store.state.counter }}</button>
  </div>
</template>

<script>
import axios from "@nuxtjs/axios";
export default {
  data() {
    return {
      user : {
      email: "",
      password: "",
      },
      test : {
        mail: 'serdar',
        password: '1234'
      },
    };
  },

  methods: {
    deneme : function() {
      console.log('Deneme Yazacak!!');
    },
    getLogin() {
      this.$axios
        .post("/api/login/", this.user)
        .then(result => {
          console.log(result);
          if(result.data.status === false) {
            this.modal('Uyarı', result.data.message);
          }
          else {
            this.modal('Başarılı', result.data.message);
            localStorage.setItem('x-access-token', result.data.token);
            this.$router.push('/panel');
          }
        })
        .catch(err => {
          console.log(err);
          // this.errors.push(err);
        });
    },
    modal(status, message) {
        this.$alert(message, status, {
          confirmButtonText: 'OK',
        });
      }
  }
};
</script>

<style scoped>
</style>