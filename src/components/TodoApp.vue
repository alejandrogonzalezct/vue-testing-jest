 <template>
  <div >
    <div>
        <div v-for="todo in todos" :key="todo.id" data-test="todo">
            {{todo.text}}
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'TodoApp',
    data(){
        return {
            todos : [
                {
                    id: 1,
                    text: "Learn Vue Testing",
                    completed:false
                },
                {
                    id: 1,
                    text: "Learn Test Component.",
                    completed:false
                },
                {
                    id: 1,
                    text: "Upload branch for this test to master after tested component and works.",
                    completed:false
                },
            ] 
        }
    },
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
 