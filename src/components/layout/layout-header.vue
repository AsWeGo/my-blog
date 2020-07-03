<template>
<div id="layout-header">
  <site-logo></site-logo>
  <site-menu></site-menu>
</div>
</template>

<script>
  import siteLogo from 'components/site-logo.vue'
  import siteMenu from 'components/site-menu.vue'

  export default {
    name:"layout-header",
    components: {
      siteLogo,
      siteMenu
    }
  }
</script>

<style scoped>
  #layout-header {
    position: fixed;
    height: 80px;
    width: 100%;
    padding: 0px 80px;
    
    display:flex;
    justify-content: space-between;
    /* 主轴对齐 */
    align-items: center; 
    /* 内容在主轴上的对齐方式 */
  }
  @media (max-width: 960px){
        #layout-header{
            padding: 0 20px;
        }
    }
  @media (max-width: 600px){
      #layout-header{
          padding: 0 10px;
      }
  }
</style>