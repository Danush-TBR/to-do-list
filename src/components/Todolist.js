import React, { Component, useState } from 'react';
import axios from "axios"; 
import Todo from './Todo';


const Todolist = ({ arrli, handledel, effect }) => {

    const [editIndex, setEditindex] = useState(-1);
    const [editText,setEditText]=useState("");
    const [upId,setUpid]=useState(-1);
    let dbdelId=0;
    let array1 = [];
    let array2=[]; 

    
    
    const del = (delId,index) => {
        console.log(delId);
        dbdelId=delId;
        fetch(`http://localhost:3000/delete/${delId}`,
                {method: 'DELETE'
            }).then((result)=>result.json().then((resp)=>console.log(resp)));
        effect(true);
        for (let ind = 0; ind < arrli.length; ind++) {
            if (arrli[ind]._id !== delId) {
                array1.push(arrli[ind]);
            }
        }

        // handledel(array1);
        // console.log(handledel);

    }
    const edit = (id,index) => {
        // setBoolean(false)
        setEditindex(index);
        setUpid(id);
    }
    const text=(e)=>{
        setEditText(e.target.value);
        console.log(editText);
    }
    const update=(e)=>{
        for (let ind = 0; ind < arrli.length; ind++) {
            
            if (arrli[ind]._id === upId) {
                    array2.push({todo: editText,count : editIndex});
            }
            else{
                array2.push(arrli[ind]);
            }
        }  
        // let item={index:editIndex,content:editText};
        
        fetch(`http://localhost:3000/update/${upId}`,
         {  method: "PATCH", 
          headers: {    "Content-type": "application/json"  }, 
           body: JSON.stringify({   _id:upId, index:editIndex,content:editText  })})
            .then(response => {   
                 console.log(response.status);    
                 return response.json();  
                }) 
             .then(data => console.log(data)); 
        setUpid(-1);
        effect(true);
        handledel(array2);
        setEditindex(-1);
        
    }


    return (<div>
        {
        arrli.map(
        task => (task._id !== upId? 
        <div key={task._id}>
            {task.content}
            <button onClick={() => edit(task._id,task.index)}>EDIT</button>
            <button onClick={() => del(task._id,task.index)}>DELETE</button>
        </div>
         : <div><input type="text" placeholder='task' onChange={text} /><button onClick={update}>UPDATE</button> </div>))
         }


    </div>);
}

export default Todolist;