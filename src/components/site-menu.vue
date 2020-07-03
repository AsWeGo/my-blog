<template>
  <div class="site-menu">
    <site-menu-item>
      <template v-slot:default>
        <header-search></header-search>
      </template>
    </site-menu-item>

    <site-menu-item>
      <template v-slot:default>
        <router-link to="/">首页</router-link>
      </template>
    </site-menu-item>
    
    <site-menu-item :child="true">
      <template v-slot:default>
        <a href="#">文章</a>
      </template>
      <template v-slot:childMenu>
          <!-- <div v-for="item in category" :key="item.title"><router-link :to="`/category/${item.title}`">{{item.title}}</router-link></div> -->
          <!-- <div> -->
            <div v-for="item in category" :key="item.title"><router-link :to="`/category/${item.title}`">{{item.title}}</router-link></div>
          <!-- </div> -->
      </template>
      <!-- <div class="childMenu" v-if="category.length">
            <div class="sub-menu" v-for="item in category" :key="item.title"><router-link :to="`/category/${item.title}`">{{item.title}}</router-link></div>
        </div> -->
    </site-menu-item>

    <site-menu-item>
      <template v-slot:default>
        <router-link to="/friend">友链</router-link>
      </template>
    </site-menu-item>
    
    <site-menu-item>
      <template v-slot:default>
        <router-link to="/about">关于</router-link>
      </template>
    </site-menu-item>
        
  </div>
</template>

<script>
  import headerSearch from 'components/header-search.vue'
  import siteMenuItem from 'components/site-menu-item.vue'

  export default {
    name:"site-menu",
    components: {
      headerSearch,
      siteMenuItem
    },
    data() {
      return {
        category: []
      }
    },
    mounted() {
      this.fetchCategory()
    },
    methods: {
      fetchCategory() {
        // fetchCategory().then(res => {
        //   this.category = res.data
        // }).catch(err => {
        //   console.log(err)
        // })
        this.category.push({"href":"/category/Java","id":1,"title":"Java"})
        this.category.push({"href":"/category/SpringBoot","id":2,"title":"SpringBoot"})
        this.category.push({"href":"/category/Mysql","id":3,"title":"Mysql"})
        this.category.push({"href":"/category/live","id":4,"title":"随笔"})
      }
    }
  }
</script>

<style scoped lang="less">
  .site-menu {
    display: flex;
    align-items: center;
  }
</style>