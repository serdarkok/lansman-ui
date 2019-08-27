<template>
    <el-container class="main-container">
        <el-row>
          <el-col>Burası login sonrası alan</el-col>
          <el-col>{{ $store.state.counter }}</el-col>
        </el-row>
    </el-container>

</template>

<script>
export default {
  // middleware :'authenticated',
}
</script>

<style scoped>

</style>