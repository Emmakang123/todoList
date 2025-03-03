import React, { useState } from 'react';

function TodoList(props) {
    const [task, setTask] = useState("");
    const [taskList, setTaskList] = useState([]);

    const getNextId = () => {
        let nextId = localStorage.getItem("nextId");
        if(!nextId){
            nextId = 1;
        }else{
            nextId = parseInt(nextId,10); // 10 : for changing decimal number
        }

        localStorage.setItem("nextId", nextId+1);
        return nextId;
    }
    const addTask = () =>{
        if(!task.trim()) return;
        setTaskList([...taskList, {id : getNextId(), text: task} ]);
        setTask("")
    }
    
    return (
        <div>
            
            <input type='text' value={task} onChange={(e) => {
                setTask(e.target.value);
            }} placeholder='Enter New Task' />
            <button onClick={addTask}>Add </button>
        </div>
    );
}

export default TodoList;