import React, { useState } from 'react';

function Header(props) {
    const [name, setName] = useState(localStorage.getItem("userName")||"");
    // name값있으면 false 없으면 true -> 입력값 체크할거라서
    const [isEditing, setIsEditing] = useState(name ? false : true);
    const [error, setError] = useState("")

    const changeName = function(e){
        setName(e.target.value);
    }
    const validCheck = function(e){
        console.log("name : ", name);
        if(name.trim() === ""){
            setError(true); // 에러메시지 노출
            return;
        }
        setIsEditing(false);
        localStorage.setItem("userName", name)


    }
    const pressEnter = function(e){
        if(e.key === 'Enter') validCheck();
    }
    return (
        <div>
            {isEditing ? (
                <form>
                    <input type='text' placeholder='Enter your name' value={name} 
                    onChange={changeName} 
                    onKeyDown={pressEnter}
                    // onBlur={validCheck} // focusout 
                    autoFocus
                    />
                    <input type='submit' onClick={validCheck} value="OK"/>
                    {error && <div >Enter Your Name!!</div>}
                </form>
            ): (<h2 onClick={function(){setIsEditing(true)}}> Hello, {name}  </h2>)}
        </div>
    );
}

export default Header;