import React from "react";

class Login extends React.Component {

    constructor() {
        super();

        this.state = {
            userName: '',
            rememberMe: false,
            users: []
        };
        //this.onSave = this.onSave.bind(this);
    }

    nameChange(evntObj) {
        const { value } = evntObj.target;
        this.setState({ userName: value });
    }
    onCheckChange(evntObj) {
        const { checked } = evntObj.target;
        this.setState({ rememberMe: checked });
    }

    onSave = () => {
        const { users, userName } = this.state;
        users.push(userName);
        this.setState({ users });
        alert(`My name is ${this.state.userName} and I am ${this.state.rememberMe}`)
    }
    render() {
        return (
            <>
                <div>Login Page</div>

                <label>User Name</label>
                <input type="text" value={this.state.userName}
                    onChange={evnt => this.nameChange(evnt)} />

                <br />
                <label>Remember Me</label>
                <input type="checkbox" checked={this.state.rememberMe}
                    onChange={evnt => this.onCheckChange(evnt)} />

                <br />
                <button onClick={this.onSave}>Save</button>
            </>
        );
    }
}

export default Login;