const app = Vue.createApp({
    data() {
        return {
            todos: [
                { text: 'Fare la spesa', done: false },
                { text: 'Leggere un libro', done: true }
            ],
            newTodo: ''
        };
    },
    methods: {
        addTodo() {
            if (this.newTodo.trim()) {
                this.todos.push({ text: this.newTodo, done: false });
                this.newTodo = '';
            }
        },
        removeTodo(index) {
            this.todos.splice(index, 1);
        },
        toggleDone(index) {
            this.todos[index].done = !this.todos[index].done;
        }
    }
});
app.mount('#app');
