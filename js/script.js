// ======= varibale part  ========
let todoInput = document.querySelector('.todoInput')
let addButton = document.querySelector('.addButton')
let todoList  = document.querySelector('.todoList')
let turn      = true
// ============== functions part =============
addButton.addEventListener('click' , ()=>{
    //========== condition part start
    if(todoInput.value == ''){
        alert('please enter an value')
    }else{
        //=========== creating elements
        let singel_list   = document.createElement('div')
        let done          = document.createElement('div')
        let todoListInput = document.createElement('input')
        let editButton    = document.createElement('i')
        let deleteButton  = document.createElement('i')
        
        //========== making apped child
        todoList          .appendChild(singel_list)
        singel_list       .appendChild(done)
        singel_list       .appendChild(todoListInput)
        singel_list       .appendChild(editButton)
        singel_list       .appendChild(deleteButton)
        // ========= creating class names
        singel_list       .classList.add('singel_list')
        done              .classList.add('done')
        todoListInput     .classList.add('todoListInput')
        editButton        .classList.add('fa-regular', 'fa-pen-to-square', 'listIcon' ,'eiditIcon')
        deleteButton      .classList.add('fa-regular','fa-trash-can' , 'listIcon' ,'deleteIcon')
        //========== set input tag attribute
        todoListInput     .setAttribute('readonly' , 'readonly')
        todoListInput.value  = todoInput.value
        todoInput.value = ''
        // ========= edit input data
        editButton.addEventListener('click', ()=>{
            if(turn == true){
                todoListInput .removeAttribute('readonly' , 'readonly')
                editButton    .classList.remove('fa-regular', 'fa-pen-to-square', 'listIcon' ,'eiditIcon')
                editButton    .classList.add('fa-regular' , 'fa-circle-check' ,'eiditIcon' , 'listIcon')
                turn = false
            }else{
                todoListInput .setAttribute('readonly' , 'readonly')
                editButton    .classList.remove('fa-regular' , 'fa-circle-check' ,'eiditIcon' , 'listIcon')
                editButton    .classList.add('fa-regular', 'fa-pen-to-square', 'listIcon' ,'eiditIcon')
                turn = true
            }
        }) 
        //========= delete todo list
        deleteButton.addEventListener('click' , ()=>{
            singel_list.remove()
        })
        //========= dont todo task
        done.addEventListener('click' , ()=>{
            done.style = 'border-color: #71ff05 ; background: #71ff05'
            todoListInput.style = ' text-decoration: line-through ; font-style:italic; color: #71ff05'
            editButton.style  = 'display: none'
        })










     }








})
// ================= console part 



