let newTask = document.querySelector('#add-task input')
let tasks = document.getElementById('tasks')
let addBtn = document.getElementById('add')
addBtn.onclick = function (){
    if(!newTask.value.length){
        alert('Please insert a task!')
    } else{
        tasks.innerHTML += `
        <div class="task">
            <input type="checkbox" class="done">
            <span id="title-task">
                ${newTask.value}
            </span>
            <button class="del">
                <i class="far fa-trash-alt"></i>
            </button>
        </div>
`
        let tasks_del =  document.querySelectorAll('.del')
        for(let i=0; i<tasks_del.length; i++){
            tasks_del[i].onclick = function (){
                this.parentNode.remove()
            }

        }


    }
}

document.addEventListener('keypress', function (e){
    if(e.key=='Enter'){
        addBtn.click();
    }
})