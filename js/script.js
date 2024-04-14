// ======= varibale part  ========
let todoInput = document.querySelector('.todoInput')
let addButton = document.querySelector('.addButton')
let todoList = document.querySelector('.todoList')












// ============== functions part =============

addButton.addEventListener('click' , ()=>{
    //=========== creating elements
    let singel_list   = document.createElement('div')
    let done          = document.createElement('div')
    let todoListInput = document.createElement('input')
    let icon1         = document.createElement('i')
    let icon2         = document.createElement('i')
    //========== making apped child
    todoList.appendChild(singel_list)
    singel_list.appendChild(done)
    singel_list.appendChild(todoListInput)
    singel_list.appendChild(icon1)
    singel_list.appendChild(icon2)
    // ========= creating class names
    singel_list.classList.add('singel_list')
    done.classList.add('done')
    todoListInput.classList.add('todoListInput')
    icon1.classList.add('fa-regular', 'fa-pen-to-square', 'listIcon' ,'eiditIcon')
    icon2.classList.add('fa-regular','fa-trash-can' , 'listIcon' ,'deleteIcon')
    
})














// ================= console part 



