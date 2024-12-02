import React, { useState,useEffect } from 'react'
import { getTasks,addTasks,deleteTasks, editTasks } from '../services/todoService'
import Todoitem  from './Todoitem'
const TodoApp = () => {
    const[taskInput, setInputTask] = useState('');
    const[tasks,setTasks] = useState(getTasks());

    const handleAddTask = () =>{
        if (taskInput.trim()){
            addTasks(taskInput);
            setInputTask('');// Clear input field
            setTasks(getTasks()); // Refresh task list from service

        }
    };

    const handleTaskUpdate = (updatedTask, index) => {
        const updatedTasks = tasks.map((task, idx) => 
        idx === index ? updatedTask : task // Update only the task at the specific index
    );
    setTasks(updatedTasks); 

    };

    const handleDeleteTask = (index) =>{
        deleteTasks(index)
        const updatedTask = tasks.filter((_,idx) => idx !== index);
        setTasks(updatedTask)
    }

    useEffect(() => {
    setTasks(getTasks()); // Ensure the task list is loaded when the component mounts
  }, []);

  return (
    <div className='TodoApp'>
        <h1>To-do-list</h1>
        <input type='text' value={taskInput} onChange={(e) => setInputTask(e.target.value)} placeholder='Enter a new task'/>
        <button onClick={handleAddTask}>Add Task</button>
        <table>
            <thead>
                <tr>
                    <th>Task</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
        <tbody>
       
            {tasks.map((task,index) => (
                <Todoitem key={index} task={task} index={index} onTaskUpdate={handleTaskUpdate}  onDeleteTask={handleDeleteTask}/>
            ))}
        </tbody>
        </table>
    </div>
  )
}

export default TodoApp