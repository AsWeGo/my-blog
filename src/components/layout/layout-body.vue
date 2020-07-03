<template>
    <div id="layout-body" :style="{minHeight:minHeight+'px'}">
        <router-view></router-view>
        <back-top></back-top>
    </div>
</template>

<script>
    import backTop from '@/components/back-top'
    export default {
        name: "layout-body",
        data(){
          return{
              minHeight: 600
          }
        },
        components: { backTop },
        methods:{
          init(){
              let _this = this
              // this只是一个变量名，this代表父函数，如果在子函数还用this，this的指向就变成子函数了，_this就是用来存储指向的。
              this.minHeight = document.documentElement.clientHeight
              window.onresize = function () {
                  _this.minHeight = document.documentElement.clientHeight
              }
          }
        },
        created() {
            this.init()
        }
    }
</script>

<style scoped>

</style>
