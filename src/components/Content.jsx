import React, { Component } from 'react';
import Tasks from './Tasks';
class Content extends Component {
    state = {
        currentTodo : '',
        noOfTodos: 0,
        allTodos : [],
        isInEditingState : false,
        editTaskId : null,
        editTodo: ''
    } 
    inputHandler = event =>{
        this.setState({currentTodo : event.target.value})
    }
    editInputHandler = event =>{
        this.setState({editTodo:this.editInputHandler})
    }
    deleteTask = (id) =>{
        var {allTodos:myTodos} = this.state;
        myTodos = myTodos.filter(item => item.id !== id)
        this.setState({allTodos:myTodos})
        if(id === this.state.editTaskId) this.changeEditState();
    }
    addtask = (event) =>{
        if(this.state.currentTodo!=='' && !this.state.isInEditingState){
            this.setState({allTodos:[...this.state.allTodos,{id: this.state.noOfTodos+1,task:this.state.currentTodo}],currentTodo:'',noOfTodos:this.state.noOfTodos+1})
        }
        else{
            alert("Type a task or you're already editing a task");
        }
        event.preventDefault();
    }
    editTask = (task) =>{
        console.log("Hello");
        this.setState({isInEditingState:true,editTaskId : task.id,editTodo : task.task});
    }
    changeTask = (index) =>{
        let {allTodos} = this.state;
        allTodos[index].task = this.state.editTodo;
        this.setState({editTodo:''});
        this.changeEditState();
    }
    changeEditState = () => {
        this.setState({editTaskId : null,isInEditingState :  false})
    }

    render() {
        return (
            <div className="main-content">
                <div className="input-box">
                    <form>
                        <input id="my-button" type="text" onChange={this.inputHandler} placeholder="Enter the task" value={this.state.isInEditingState?null:this.state.currentTodo}/>
                        <button type="submit" onClick={this.addtask}>+</button>
                    </form>
                </div>
                <div className="display-tasks">
                    {this.state.allTodos.map((todo,index)=>
                    <Tasks 
                        key={index}
                        inputHandler={this.inputHandler}
                        todo={this.state.allTodos[index]}
                        index={index}
                        changeTask={this.changeTask}
                        editTaskId={this.state.editTaskId}
                        editTask={this.editTask}
                        deleteTask={this.deleteTask}
                        isInEditingState = {this.state.isInEditingState}
                        editInputHandler = {this.editInputHandler}
                        >
                    </Tasks>)}
                </div>
            </div>
        );
    }
}
 
export default Content;