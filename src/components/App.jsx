import React, { Component } from 'react';
import Header from './Header';
import Content from './Content';
import '../static files/style.css'

class App extends Component {
    render() { 
        return (
            <React.Fragment>
            <Header/>
            <div class = "bodyContent">
                <div className="addTaskHeader">Add a new task.</div>
                <Content/>
            </div>
            </React.Fragment>
        );
    }
}
 
export default App
;