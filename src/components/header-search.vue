<template>
  <div class="header-search">
    <font-awesome-icon @click.stop="click" :icon="['fas','search']" :class="{'active':show}"></font-awesome-icon>
    <input type="text" ref="searchInput" :class="{'show':show}" v-model="searchValue" @click.stop="" @keyup.enter="search">
  </div>
</template>

<script>
  export default {
    name:"header-search",
    data() {
      return {
        searchValue: '',
        show: false
      }
    },
    watch:{
      show(value) {
        if (value) {
          document.addEventListener('click', this.close)
        } else {
          document.removeEventListener('click', this.close);
        }
      }
    },
    methods: {
      search() {
        this.$router.push({name:'search', params:{word:this.searchValue}})
      },
      click() {
        this.searchValue = ''
        this.show = !this.show
        if (this.show) {
          this.$refs.searchInput && this.$refs.searchInput.focus()
        }
      },
      close() {
        this.$refs.searchInput && this.$refs.searchInput.blur()
        this.show = false
      }
    }
  }
</script>

<style scoped>
  .header-search {
    display: inline-block;
    position: relative;
  }
  .header-search .active {
    color: var(--color-high-text);
  }
  .header-search:hover {
    color: var(--color-high-text);
  }
  .header-search input {
    border: none;
    outline: none;
    overflow: hidden;
    background: transparent;
    height: 30px;
    width: 0;

    transition: .4s all;
    -moz-transition: .4s all; /* Firefox 4 */
    -webkit-transition: .4s all; /* Safari 和 Chrome */
    -o-transition: .4s all; /* Opera */
  }
  .header-search input.show {
    width: 200px;
    margin-left: 10px;
  }
  .header-search input:focus {
    border-bottom: 1px solid #8fd0cc;
  }
</style>