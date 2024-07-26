import React from 'react';
import './App.css'

export default class LoginForm extends React.Component {
    constructor(props) {
        super(props); // calling the constructor of the parent React.Component
        this.state = {
            userName: '',
            password: '',
        };
    }

    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            userName: '',
            password: ''
        });
    };

    render() {
        return(
            <div className="App-header">
                <div>
                    <h3 className="border">Log In</h3>
                </div>
                <form className='App' onSubmit={this.handleSubmit}>
                    <label>
                        Username:
                        <input type="text" userName="userName" placeholder='Username' value={this.state.userName} onChange={this.handleChange} />
                    </label>
                    <label>
                        Password:
                        <input type="password" password="password" placeholder='Password' value={this.state.password} onChange={this.handleChange} />
                    </label>                    
                </form>
                <div>
                    <input className="sub" type="submit" value="Submit" />
                </div>
            </div>
        )
    }    
}