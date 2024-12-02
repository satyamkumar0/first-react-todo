import React, {useState} from 'react'
import { deleteTasks,editTasks } from '../services/todoService'


const Todoitem = ({task,index,onTaskUpdate, onDeleteTask })  => {
    const[isEditing,setIsEditing] = useState(false)
    const[newTask,setNewTask] = useState(task);

    const handelDelete = () => {
        //deleteTasks(index)
        //onTaskUpdate()
        onDeleteTask(index);
        
    };

  const handleEdit = () => {
    if (isEditing) {
      // Save the updated task
      editTasks(index, newTask); 
      console.log('data-----',index)
      console.log('value---',newTask)
      
      onTaskUpdate(newTask, index); // Refresh the task list after editing

     
    }
    setIsEditing(!isEditing); // Toggle the editing state
  };
   

  return (
    <tr>
        <td>
   
        {isEditing ? (<input type = "text" value = {newTask} onChange={(e) => setNewTask(e.target.value)}/>):
        
        (<span>{task}</span>)
        }
    </td>
        <td><button onClick={handleEdit}>{isEditing ? 'Save' : 'Edit'}</button></td>
       <td> <button onClick={handelDelete}>Delete</button></td>
    </tr>
  )
}

export default Todoitem