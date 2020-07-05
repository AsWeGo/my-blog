<template>
  <div id="banner">
    <div class="banner-img" :style="{'background-image': `url(${websiteInfo.background})`}">
      <div class="focusInfo" :class="{'noVisible':notHome}">
        <div class="header-tou">
          <router-link to="/"><img :src="websiteInfo.avatar"></router-link>
        </div>
        <div class="header-info">
          <p>{{websiteInfo.slogan}}</p>
        </div>
        <div class="top-social">
          <div v-for="item in socials" :key="item.id" :title="item.title"><a :href="item.href" target="_blank" :style="{'color':item.color}"><i class="iconfont" :class="item.icon"></i></a></div>
        </div>
      </div>
      <div class="slant-left" :class="{'noVisible':notHome}"></div>
      <div class="slant-right" :class="{'noVisible':notHome}"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name:"banner",
    data(){
      return{
        websiteInfo: {},
        socials: []
      }
    },
    props: {
      notHome: {
        type: Boolean,
        default: true
      }
    },
    created(){
      this.getWebSiteInfo()
      this.getSocial()
    },
    methods:{
      getSocial(){
        this.$store.dispatch('getSocials').then(data =>{
          this.socials = data
        })
      },
      getWebSiteInfo(){
        this.$store.dispatch('getSiteInfo').then(data =>{
          this.websiteInfo = data
        })
      }
    }
  }
</script>

<style scoped lang="less">
  #banner {
    position: relative;
    margin-top: 80px;
    width: 100%;
    height: 500px;
    .noVisible {
      display: none;
    }

    .banner-img{
      width: inherit;
      height: inherit;
      overflow: hidden;
      background-attachment:fixed;
      background-position: center center;
      background-repeat: no-repeat;
      background-attachment: fixed;
      background-size: cover;
      z-index: -1;
      transition: unset;
    }
    .slant-left {
      content: '';
      position: absolute;
      width: 0;
      height: 0;
      border-bottom: 100px solid #FFF;
      border-right: 800px solid transparent;
      left: 0;
      bottom: 0;
    }
    .slant-right {
      content: '';
      position: absolute;
      width: 0;
      height: 0;
      border-bottom: 100px solid #FFF;
      border-left: 800px solid transparent;
      right: 0;
      bottom: 0;
    }
  }
  .focusInfo {
    position: relative;
    padding: 0px 10px;
    top: 40%;
    left: 50%;
    transform: translate(-50%,-50%);
    text-align: center;
    img {
      width: 80px;
      height: auto;
      border-radius: 50%;
      border: 3px var(--color-text) solid;
    }
    .header-info {
      width: 60%;
      font-size: 14px;
      color: #EAEADF;
      background: rgba(0, 0, 0, 0.66);
      padding: 20px 30px;
      margin: 30px auto 0 auto;
      font-family: miranafont,"Hiragino Sans GB",STXihei,"Microsoft YaHei",SimSun,sans-serif;
      letter-spacing: 1px;
      line-height: 30px;
    }
    .header-info > p {
      color: white;
    }

    .top-social {
      height: 32px;
      margin-top: 30px;
      margin-left: 10px;
      list-style: none;
      display: inline-block;
      font-family: miranafont,"Hiragino Sans GB",STXihei,"Microsoft YaHei",SimSun,sans-serif;
      div {
        float: left;
        margin-right: 10px;
        height: 32px;
        line-height: 32px;
        text-align: center;
        width: 32px;
        background: white;
        border-radius: 100%;
      }
    }
  }
  @media (max-width: 800px){
    #banner .banner-img {
      background-size: 800px;
    }
    
    .slant-left, .slant-right {
      display: none;
    }
  }
  @media (max-width: 400px){
    #banner .banner-img {
      background-size: contain;
    }
    
    .slant-left, .slant-right {
      display: none;
    }
  }

</style>