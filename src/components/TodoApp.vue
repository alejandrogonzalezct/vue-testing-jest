 <template>
  <div >
    <div>
        <form data-test="form" @submit.prevent="createTodo">
            <input data-test="new-todo" v-model="newTodo"/>
        </form>
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
            newTodo:"",
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
    methods:{
        createTodo(){
            this.todos.push({
                id: 4,
                text: this.newTodo,
                completed: false
            })
            this.newTodo=""
        }
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
 