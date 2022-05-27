<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Counter/>
<!--     <hr>
    <Otro /> -->
  </div>
</template>

<script>
// @ is an alias to /src
import Counter from '@/components/Counter.vue'
import Otro from '@/components/Otro.vue'

export default {
  name: 'HomeView',
  components: {
    Counter,
    Otro
  }
}
</script>
