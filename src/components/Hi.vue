<template>
  <div class="hi">
    <h1>{{ msg }}</h1>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Hi',
  data() {
    return {
      msg: 'hi'
    }
  },
}
</script>

<style scoped>

</style>
