import React, { useEffect, useState } from 'react';

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
    
    useEffect( () => {
        const savedList = JSON.parse(localStorage.getItem("taskList"));
        
        if(savedList) {
            setTaskList(savedList);
        }
    }, []);

    // when updated taskList save in localstorage
    useEffect(()=>{
        console.log("useEffect Changed taskList")
        console.log(taskList)
        localStorage.setItem("tastList", JSON.stringify(taskList));
    },[taskList]);
    
    // add new Task btn
    const addTask = () =>{
        if(!task.trim()) return;
        console.log(taskList)
        setTaskList([...taskList, {id : getNextId(), text: task} ]);
        setTask("")
    }
    
    return (
        <div className='todo-container'> 
            <h1>What's your focus</h1>
            <div className='input-group'>
                <input type='text' value={task} onChange={(e) => {
                    setTask(e.target.value);
                }} placeholder='Enter New Task' />
                <button onClick={addTask}>Add </button>
            </div>
            <ul>
                {taskList.map( (task)=> {
                return(
                    <li key={task.id} className='todo-item' >
                        <span>{task.text}</span>
                        <button onClick={ () => {
                            removeTask(task.id)
                        }}>remove</button>
                    </li>
                )
                })}

            </ul>
        </div>
    );
}

export default TodoList;