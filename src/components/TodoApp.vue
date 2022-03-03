 <template>
  <div >
       
        <div 
            v-for="todo in todos" 
            :class="[todo.completed ? 'completed' : '']" 
            :key="todo.id" 
            data-test="todo"
        >
            
            {{todo.text}}
            <input 
                data-set="check" 
                type="checkbox" 
                v-model="todo.completed" 
                
            />
        </div>
         <form data-test="form" @submit.prevent="createTodo">
            <input data-test="new-todo" v-model="newTodo"/>
        </form>
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
                    text: "Learn Vue Testing",
                    completed:false
                },
                {
                    id: 1,
                    text: "Learn Vue Testing",
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
        },
        deleteItem(item){
            const indexOfItem = this.todos.indexOf(item)
            this.todos.splice(indexOfItem, 1)
        }
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.list{
    display: flex;
    flex-direction: column;
    justify-items: center;
    place-items: center;
}
.item-list{
    display: flex;
    flex-direction: row;
    margin-bottom: 4px;
    margin-top: 4px;

}
.completed{
    background-color: rgb(97, 220, 97);
    color:white;
    width: fit-content;
    height: fit-content;
    padding: 5px 5px 5px 5px;
    border-radius: 5px;
    
}
</style>