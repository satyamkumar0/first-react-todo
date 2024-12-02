
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// function to call all tasks

export const getTasks = () => {
    return tasks
}


// function to add the new tasks

export const addTasks = (task) => {
    tasks.push(task)
    localStorage.setItem('tasks', JSON.stringify(tasks));
    
};


//function to add the delete tasks

export const deleteTasks = (index) => {
    tasks = tasks.filter((_, taskIndex) => taskIndex !== index);
    localStorage.setItem('tasks', JSON.stringify(tasks));
};

// function to add the edit tasks

export const editTasks = (index,newTask) =>{
    let tasks = getTasks();
    tasks[index] = newTask;
    localStorage.setItem('tasks', JSON.stringify(tasks));
};