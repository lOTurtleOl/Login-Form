import React from 'react';
import './App.css'

export default class LoginForm extends React.Component {
    render() {
        return(
            <div className="App-header">
                <div>
                    <h3 className="border">Log In</h3>
                </div>
                <form className='App'>
                    <label>
                        Username:
                        <input type="text" userName="userName" placeholder='Username' />
                    </label>
                    <label>
                        Password:
                        <input type="password" password="password" placeholder='Password' />
                    </label>                    
                </form>
                <div>
                    <input className="sub" type="submit" value="Submit" />
                </div>
            </div>
        )
    }    
}