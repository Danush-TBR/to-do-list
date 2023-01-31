import React, { Component } from 'react';
import Header from './Header';
import Content from './Content';
import '../static files/style.css'
class App extends Component {
    render() { 
        return (
            <React.Fragment>
            <Header/>
            <p>Add a new task.</p>
            <Content/>
            </React.Fragment>
        );
    }
}
 
export default App
;