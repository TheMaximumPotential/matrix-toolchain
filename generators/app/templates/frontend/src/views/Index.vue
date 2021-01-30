<template>
  <div>index</div>
  <div>{{count}}</div>
  <button @click="add">+</button>
</template>

<script>
import { computed  } from 'vue'
import { useStore } from 'vuex'
export default {
  // methods: {
  //   add() {
  //     return this.$store.commit('add')
  //   }
  // },
  // computed: {
  //   count() {
  //     return this.$store.state.count
  //   }
  // },
  setup() {
    const store = useStore()
    const count = computed(() => store.state.count)
    const add = () => store.commit('add')
    
    return {count, add}
  }
}
</script>

<style>

</style>