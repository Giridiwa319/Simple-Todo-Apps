const fs = require('fs');

class Todo{
    constructor(id, task, status, created_at){
        this.id = id;
        this.task = task;
        this.status = status;
        this.created_at = created_at;
    }
    static getTodos(){
        let todos = JSON.parse(fs.readFileSync('./data.json','utf-8'));
        todos = todos.map(todo => {
            const {id, task, status} = todo

            return new Todo(id, task, status,new Date());
        })

        return todos;
    }
    static add(params){
        let todos = Todo.getTodos()
        const [task] = params
        let id = todos[todos.length - 1].id + 1;

        todos.push(new Todo(id, task, false))
        this.save(todos)

        console.log(`"${task}" has been Saved.`)
    }

    static delete(params){
        let todos = this.getTodos();
        let id = +params[0];

        todos = todos.filter(todo => todo.id !== id)
        this.save(todos);

        console.log(`Id ${id} has been deleted !`);
    }

    static edit(params){
        let todos = this.getTodos();
        let id = +params[0];
        let task = params[1];
        
        todos = todos.map(todo => {
            if(todo.id === id){
                todo.task = task;
            }
            return todo
        })

        this.save(todos)
    }
    static changeStatus(params){
        let todos = this.getTodos(); 
        let id = +params[0];
        
        todos = todos.map(todo => {
            if(todo.id === id){
                todo.status = !todo.status;
            }
            return todo
        });
        this.save(todos);

        console.log(`Id ${id} Status has been change`)
    }

    static save(todos){
        fs.writeFileSync('./data.json', JSON.stringify(todos,null,3))
    }
}

module.exports = Todo