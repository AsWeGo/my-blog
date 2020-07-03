<template>
  <div class="site-menu">
    <div class="menu-item header-search">
      <header-search></header-search>
    </div>
    <div class="menu-item">
      <router-link to="/">首页</router-link>
    </div>
    <div class="menu-item">
      <a href="#">文章</a>
        <!-- <div class="childMenu" v-if="category.length">
            <div class="sub-menu" v-for="item in category" :key="item.title"><router-link :to="`/category/${item.title}`">{{item.title}}</router-link></div>
        </div> -->
    </div>
    <div class="menu-item"><router-link to="/friend">友链</router-link></div>
    <div class="menu-item"><router-link to="/about">关于</router-link></div>
  </div>
</template>

<script>
  import headerSearch from 'components/header-search.vue'

  export default {
    name:"site-menu",
    components: {
      headerSearch
    }
  }
</script>

<style scoped lang="less">
  .site-menu {
    display: flex;
    align-items: center;

    justify-content: space-around;
    align-content: center;
    
    .menu-item {
      position: relative;
      min-width: 60px;
      height: 50px;
      line-height: 50px;
      text-align: center;
      margin-right: 15px;
      a {
        padding: 12px 10px;
        color: #545454;
        font-weight: 500;
        font-size: 16px;
        &:hover {
            color: var(--color-high-text);
        }
      }
    }
  }
</style>