import React, { Component } from 'react';
class Tasks extends Component {
    
    render() { 
        console.log(this.props)
        return (
            <>
                <li key={this.props.index}>{this.props.todo.id!==this.props.editTaskId?this.props.todo.task:
                    <form>
                        <input id="my-button" type="text" onChange={this.props.editInputHandler} placeholder="Enter the task" defaultValue={this.props.todo.task}/>
                        <button type="submit" onClick={() =>this.props.changeTask(this.props.index)}>+</button>
                    </form>}
                
                {!this.props.isInEditingState?<button id='editButton' onClick={() => this.props.editTask(this.props.todo)}>Edit</button>:null}

                <button onClick={() =>this.props.deleteTask(this.props.todo.id)}>Delete</button>
            
                </li>
            </>
        );
    }
}
 
export default Tasks;