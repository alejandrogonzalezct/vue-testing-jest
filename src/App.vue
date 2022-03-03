<template>
  <Navbar/>
  <TodoApp/>
  <Parent/>
</template>
<script>
import TodoApp from '@/components/TodoApp.vue'
import Navbar from '@/components/Nav.vue'
import Parent from '@/components/parent-child/Parent.vue'
export default {
  name: 'App',
  components: {
    TodoApp,
    Navbar,
    Parent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
