import React, { Component } from 'react';

class Content extends Component {
    state = {
        currentTodo : '',
        noOfTodos: 0,
        allTodos : [],
        isInEditingState : false,
        editTaskId : null
    } 
    inputHandler = event =>{
        this.setState({currentTodo : event.target.value})
    }
    deleteTask = (id) =>{
        var {allTodos:myTodos} = this.state;
        myTodos = myTodos.filter(item => item.id !== id)
        this.setState({allTodos:myTodos})
        if(id === this.state.editTaskId) this.changeEditState();
    }
    addtask = (event) =>{
        if(this.state.currentTodo!==''){
            this.setState({allTodos:[...this.state.allTodos,{id: this.state.noOfTodos+1,task:this.state.currentTodo}],currentTodo:'',noOfTodos:this.state.noOfTodos+1})
            document.getElementById("my-button").value='';
        }
        else{
            alert("Type a Task");
        }
        event.preventDefault();
    }
    editTask = (task) =>{
        console.log("Hello");
        this.setState({isInEditingState:true,editTaskId : task.id});
    }
    changeTask = (index) =>{
        let {allTodos} = this.state;
        allTodos[index].task = this.state.currentTodo;
        this.setState({currentTodo:''});
        this.changeEditState();
    }
    changeEditState = () => {
        this.setState({editTaskId : null,isInEditingState :  false})
    }
    displayTasks = () =>{
        let myTasks = [];
        const {allTodos} = this.state;
        console.log(this.state);
        for(let index = 0;index<allTodos.length;index++){
            myTasks.push(
            
            <li key={index}>{allTodos[index].id!==this.state.editTaskId?allTodos[index].task:null}

            {!this.state.isInEditingState?<button onClick={() => this.editTask(allTodos[index])}>Edit</button>:null}

            {allTodos[index].id===this.state.editTaskId?
                    <form>
                        <input id="my-button" type="text" onChange={this.inputHandler} placeholder="Enter the task" defaultValue={allTodos[index].task}/>
                        <button type="submit" onClick={() =>this.changeTask(index)}>+</button>
                    </form>
            :null}

            <button onClick={() =>this.deleteTask(allTodos[index].id)}>Delete</button>

            </li>
            )
        }
        return myTasks;
    }
    render() {
        return (
            <div className="main-content">
                <form>
                    <input id="my-button" type="text" onChange={this.inputHandler} placeholder="Enter the task"/>
                    <button type="submit" onClick={this.addtask}>+</button>
                </form>
                {this.displayTasks()}
            </div>
        );
    }
}
 
export default Content;