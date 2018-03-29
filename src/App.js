import React, { Component } from 'react';
import './App.css';
import UserList from './users/user-list.container';
import Header from './header/header.container';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <UserList/>
            </div>
        );
    }
}

export default App;
