<template>
  <div id="app">
    <loading></loading>
    <layout-header></layout-header>
    <layout-body></layout-body>
    <layout-footer></layout-footer>
    <live2d/>
  </div>
</template>

<script>
  import loading from 'components/loading.vue'
  import layoutHeader from 'components/layout/layout-header.vue'
  import layoutBody from 'components/layout/layout-body.vue'
  import layoutFooter from 'components/layout/layout-footer.vue'
  import live2d from 'components/live2d.vue'
  export default {
    name:"App",
    components: {
      layoutHeader,
      layoutBody,
      layoutFooter,
      loading,
      live2d
    }
  }
</script>

<style>
  @import url("assets/css/base.css");
</style>