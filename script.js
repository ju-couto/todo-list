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
        </div>
        `
        newTask.value= ''
    }
}
document.addEventListener('keypress', function (e){
    if(e.key=='Enter'){
        addBtn.click();
    }
})
