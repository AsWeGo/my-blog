<template>
  <div class="menu-item">
    <slot name="default"></slot>
    <div :class="hasChildMenu">
      <slot name="childMenu"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name:"site-menu-item",
    props: ['child'],
    computed: {
      hasChildMenu() {
        return this.child ? 'hasChildMenu' : "noChildMenu"
      }
    }
  }
</script>

<style scoped lang="less">
.menu-item {
  position: relative;
  min-width: 60px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  a {
    padding: 12px 10px;
    color: #545454;
    font-weight: 500;
    font-size: 16px;
    &:hover {
        color: var(--color-high-text);
    }
  }
  &:not(:last-child){
    margin-right: 15px;
  }
  &:hover .hasChildMenu{
    opacity:1;
    visibility: visible;
    transform: translateY(-5px);
  }

  .hasChildMenu {
    width: 130px;
    background-color: #FDFDFD;
    border-radius: 3px;
    border: 1px solid #ddd;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    position: absolute;
    top: 55px;
    z-index: 2;
    opacity: 0;
    visibility: hidden;

    transition: .7s all ease;
    -webkit-transition: .6s all ease;
    -moz-transition: .6s all linear;
    -o-transition: .6s all ease;
    -ms-transition: .6s all ease;

    &:before, &:after{
      content: '';
      position: absolute;
      width: 0;
      height: 0;
      border-left: 6px solid transparent;
      border-right: 6px solid transparent;
      border-bottom: 8px solid white;
      top: -8px;
      left: 20px;
    }

    &:before {
      top: -9px;
      border-bottom: 8px solid #ddd;
    }
  }
  .hasChildMenu > *{
    height: 40px;
    line-height: 40px;
    position: relative;
    &:not(:last-child):after{
      /*position: absolute;*/
      content: '';
      width: 50%;
      height: 1px;
      color: #ff6d6d;
      bottom: 0;
      left: 25%;
      z-index: 99;
    }
  }
  .noChildMenu {
    display: none;
  }
}
@media (max-width: 960px){
}
@media (max-width: 600px){
  div.menu-item {
    display: flex;
    align-items: center;
    justify-content: center;
    // margin: 0;
    margin-right: 0px !important;
  }
}
</style>