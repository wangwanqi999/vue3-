<template>
  <div id="nav">
    <el-button type="fail" @click="jumpMenu">jumpMenu</el-button>
    <!-- <router-link to="/">Home</router-link> | -->
    <!-- <router-view></router-view> -->
    <!-- <router-link to="/about">About</router-link> -->
  </div>
  <router-view />
</template>
<script>
export default {
 
  data() {
    return {};
  },
  methods: {
    // 跳转菜单页面
    jumpMenu() {
      let data = {
        name: "menu",
        params: {
          username: "王万琦",
        },
      };
      this.$router.push(data);
    },
  },
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
