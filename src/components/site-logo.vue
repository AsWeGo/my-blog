<template>
  <div class="site-logo">
    <router-link to="/">
      <img src="@/assets/site-logo.svg" alt="">
      <p class="site-name">GBlog</p>
    </router-link>
  </div>
</template>

<script>
  export default {
    name:"site-logo"
  }
</script>

<style scoped lang="less">
  .site-logo {
    text-align: center;
  
    img {
      width: 60px;
      height: 60px;
    }
    .site-name {
      position: relative;
      font-size: 15px;
      font-weight: bold;
      top: -10px;
    }
  }
</style>