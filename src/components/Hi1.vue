<template>
  <div class="hi1">
    <h1>{{ msg }}-{{$route.params.username}}</h1>
  </div>
</template>

<script>
export default {
  name: 'Hi1',
  data() {
    return {
      msg: 'hi1'
    }
  },
}
</script>

<style scoped>

</style>
