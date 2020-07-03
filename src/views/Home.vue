<template>
  <div class="home">
    <loading></loading>
    <layout-header></layout-header>
    <layout-body></layout-body>
    <layout-footer></layout-footer>
  </div>
</template>

<script>
  import loading from 'components/loading.vue'
  import layoutHeader from 'components/layout/layout-header.vue'
  import layoutBody from 'components/layout/layout-body.vue'
  import layoutFooter from 'components/layout/layout-footer.vue'

  export default {
    name:"Home",
    components: {
      loading,
      layoutHeader,
      layoutBody,
      layoutFooter
    }
  }
</script>

<style scoped>

</style>