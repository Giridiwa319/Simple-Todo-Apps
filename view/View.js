class View{
    static help(){
        console.log("Todo Apps Commands :");
        console.log(`node index.js`);
        console.log(`node index.js help`);
        console.log(`node index.js show`);
        console.log(`node index.js add <task>`);
        console.log(`node index.js delete <id>`);
        console.log(`node index.js edit <id><task>`);
        console.log(`node index.js changeStatus <id><task>`);
    }

    static show(todos){
        console.log(`Task Lists:`)
        todos.forEach(todo => {
            const{id,task} = todo
            if(todos.status){
                console.log(`${id}. [X] ${task}`);
            }else{
                console.log(`${id}. [ ] ${task}`);
            }
        })
    }
    static message(msg){
        console.log(msg);
    }
}

module.exports = View