import React, { Component, useEffect, useState } from 'react';
import Todolist from './Todolist';
import axios from "axios"; 


const api=axios.create({
    baseURL:"http://localhost:3000/"
});












function Todo() {
    const [todo,setTodo]=useState("");
    const [arrl,setArrl]=useState([]);
    const [count,setCount]=useState(1);
    const [change,setChange]=useState(false);
    useEffect(() => {
        fetch("http://localhost:3000/")
        .then((response)=>response.json())
        .then(resp=>{
            setArrl(resp)
            setCount(resp.length + 1)
            // console.log(resp[0]._id)//resp array of objects
            setChange(false)
        }).catch((err)=>console.log(err))
    }, [change])
    

    const dolist=(e)=>{
        setTodo(e.target.value);
    }
    const handle=()=>{
        if(todo!=="")
        {
            // async
            const postTodo=()=>{
                api.post("save",{index:count,content:todo});
            } 
            postTodo();  
            setCount(count+1);
            setChange(true);
        } 
        
        
    }
    

    return ( 
        <>
        <div className="input-group mb-3">
            <input type="text" placeholder='task' className="form-control"  onChange={dolist}/>
            <div className="input-group-append"><button onClick={handle} className="btn btn-info" >ADD</button></div>
        </div>
        <div>
            <Todolist arrli={arrl} handledel={setArrl} effect={setChange}  />
        </div>
        </>
     );
}

export default Todo;