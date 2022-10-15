/**
 * Membuat List Daftar Harian
 * Seorang Pelajar yang kebetulan sedang liburan ingin membuat 
 * sebuah daftar list harian selama liburan berlangsung
 * buatlah list daftar harian pelajar tersebut dengan menggunkan default command di bawah :
 * 
 * Default Command :
 * node index.js
 * node index.js help
 * node index.js show
 * node index.js add <task>
 * node index.js delete <id>
 * node index.js edit<id><task>
 * node index.js changeStatus<id>
 */

 const command = process.argv[2];
 const params = process.argv.slice(3);

 const TodoController = require('./controller/TodoController')
 switch(command){
    case 'help':
        TodoController.help()        
        break;
    case 'show':
        TodoController.show()
        break;
    case 'add':
        TodoController.add(params)
        break;
    case 'delete':
        TodoController.delete(params)
        break;
    case 'edit' :
        TodoController.edit(params)
        break;
    case 'changeStatus' :
        TodoController.changeStatus(params)
        break;
    case 'undefined':
        TodoController.message('Command Cant be empty')
        break;
    default :
        TodoController.message('Masukkan Inputan Command Yang Benar')
        break;
 }

 //console.log(command,params)