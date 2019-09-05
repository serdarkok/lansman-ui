<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 offset-md-2">
        <h1 class="text-center">Ana Sayfa </h1>
        <nuxt-link to="/logout">Logout Ol</nuxt-link>
      </div>  
    </div>
  </div>
</template>

<script>

export default {
  middleware : ['verifyUser'],
}
</script>

<style>

</style>
