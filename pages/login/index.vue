<template>
  <div class="login-wrap">
    <div class="login-box">
      <form @submit.prevent="getLogin" method="POST">
        <div class="form-group">
          <label for="mail">E-Posta / Kullanıcı Adı</label>
          <input
            type="text"
            v-model="mail"
            class="form-control"
            id="mail"
            name="mail"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
        </div>
        <div class="form-group">
          <label for="password">Şifre</label>
          <input
            type="password"
            v-model="password"
            class="form-control"
            id="password"
            name="password"
            placeholder="Şifre"
          />
        </div>
        <button type="submit" class="btn btn-primary">Giriş Yap</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from '@nuxtjs/axios';
export default {
  data() {
    return {
      mail: "",
      password: "",
      errors: []
    };
  },

  methods: {
    getLogin() {
        this.$axios
        .post("http://localhost:3001/api/login", this.mail, this.password)
        .then(result => {
          console.log(result);
        })
        .catch(err => {
          this.errors.push(err);
        });
    },
    async fetchSomething() {
      const ip = await this.$axios.$get("http://icanhazip.com");
      this.ip = ip;
    }
  }
};
</script>

<style scoped>
</style>