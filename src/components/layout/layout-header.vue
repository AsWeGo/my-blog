<template>
<div id="layout-header" :class="style">
  <site-logo></site-logo>
  <site-menu></site-menu>
</div>
</template>

<script>
  import siteLogo from 'components/site-logo.vue'
  import siteMenu from 'components/site-menu.vue'

  export default {
    name:"layout-header",
    data() {
      return {
        lastScrollTop: 0,
        fixed: false,
        hidden: false,
      }
    },
    mounted() {
      window.addEventListener('scroll', this.watchScroll)
    },
    beforeDestroy() {
      window.removeEventListener('scroll', this.watchScroll)
    },
    components: {
      siteLogo,
      siteMenu
    },
    computed: {
      style() {
        return {'fixed':this.fixed, 'hidden':this.hidden}
      }
    },
    methods: {
      watchScroll() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        if (scrollTop === 0) {
          this.fixed = false
        } else if (scrollTop >= this.lastScrollTop) {
          this.fixed = false
          this.hidden = true
        } else {
          this.fixed = true
          this.hidden = false
        }
        this.lastScrollTop = scrollTop
      }
    }
  }
</script>

<style scoped lang="less">
  #layout-header {
    position: fixed;
    height: 80px;
    width: 100%;
    padding: 0px 80px;
    z-index: 9;
    

    background-color: #fff;
    display:flex;
    justify-content: space-between;
    /* 主轴对齐 */
    align-items: center; 
    /* 内容在主轴上的对齐方式 */

    top: 0;
    transition: .3s all ease;
    -webkit-transition: .3s all ease;
    -moz-transition: .3s all linear;
    -o-transition: .3s all ease;
    -ms-transition: .3s all ease;

    &.hidden {
      // top: -100px;
    }
    &.fixed {
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
    }
  }
  @media (max-width: 960px){
    #layout-header{
      padding: 0 20px;
    }
  }
  @media (max-width: 600px){
    #layout-header{
      // justify-content: ;
      padding: 0 10px;
      
    }
  }
</style>