import React, { Component } from 'react';


export default class Header extends Component {
    state = { } 
    render() { 
        return (
            <header>
                <div className='my-header'> My<div className = "my-heading"> TO-DO </div>List</div>
            </header>
        );
    }
}

