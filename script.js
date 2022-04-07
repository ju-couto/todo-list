let newTask = document.querySelector('#add-task input')
let tasks = document.getElementById('tasks')
let addBtn = document.getElementById('add')
addBtn.onclick = function (){
    if(!newTask.value.length){
        alert('Please insert a task!')
    } else{
        let task = document.createElement("label")
        task.classList.add("task")
            task.innerHTML= ` 
            <input type="checkbox" ${status} class="done">
            <span id="title-task">
                ${newTask.value}
            </span>
        `
        tasks.appendChild(task)
        newTask.value= ''

    }
}
document.addEventListener('keypress', function (e){
    if(e.key=='Enter'){
        addBtn.click();
    }
})
