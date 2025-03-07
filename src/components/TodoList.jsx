import React, { useEffect, useState, useRef } from 'react';

function TodoList(props) {
    const [task, setTask] = useState("");
    const [taskList, setTaskList] = useState([]);
    const isFirstRender = useRef(true);

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
        if(isFirstRender){
            isFirstRender.current = false; 
            const savedList = JSON.parse(localStorage.getItem("taskList"));
            console.log("savedList ::::: " , savedList)
            if(savedList && savedList.length > 0) {
                setTaskList(savedList);
            }
        }
    }, []);

    // when updated taskList save in localstorage
    useEffect(()=>{
        if(isFirstRender.current && taskList.length > 0)
        console.log("localStorage에 추가됨 : ", localStorage.getItem("tastList"))
        localStorage.setItem("taskList", JSON.stringify(taskList));
    },[taskList]);
    
    // add new Task btn
    const addTask = () =>{
        if(!task.trim()) return;
        setTaskList([...taskList, {id : getNextId(), text: task} ]);
        setTask("")
    }
    const removeTask = (id) => {
        const updatedTasks = taskList.filter(task => task.id !== id);
        setTaskList(updatedTasks);
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
                        <span className='todo-content'>{task.text}</span>
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