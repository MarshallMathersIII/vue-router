<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <div>
      <!-- 使用 router-link 组件来导航. -->
      <!-- 通过传入 `to` 属性指定链接. -->
      <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
      <router-link to="/">首页  </router-link>
      <router-link to="/hi">Hi父页面    </router-link>
      <!-- <router-link to="/hi/hi1">Hi子页面1    </router-link> -->
      <router-link :to="{name:'hi1',params:{username:'vue'}}">Hi子页面1    </router-link>
      <router-link to="hi2">Hi子页面2    </router-link>
    </div>
    <p>{{$route.name}}</p>
    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {}
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
