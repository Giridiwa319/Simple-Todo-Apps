const Todo = require('../model/Todo')
const View = require('../view/View')

class TodoController{
    static help(){
        View.help()
    }
    static message(msg){
        console.log(msg)
    }
    static show(){
        let todos = Todo.getTodos()
        View.show(todos);
    }
    static add(params){
        Todo.add(params);
    }
    static edit(params){
        Todo.edit(params)

    }
    static delete(params){
        Todo.delete(params)
    }
    static changeStatus(params){
        Todo.changeStatus(params)
    }
}



module.exports = TodoController

