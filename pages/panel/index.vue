<template>
    <el-container class="main-container">
        <el-row>
          <el-col>Burası login sonrası alan</el-col>
          <nuxt-link to="/toru">Toruya geç</nuxt-link>
        </el-row>
    </el-container>

</template>

<script>
export default {
  middleware :'verifyUser',

  computed : {
    startLogin() {

    }
  }
}
</script>

<style scoped>

</style>