import React from "react";

class Users extends React.Component {

    constructor() {
        super();

        this.state = {
            userName: '',
            usersList: [

                { id: '123', name: 'Ali' }
            ]
        }


    }

    nameChangeHandler = (evnt) => {
        //debugger;

        const userName = evnt.target.value;
        this.setState({ userName });
    }
    addUserHandler = () => {
        //debugger;
        const { userName, usersList } = this.state;
        usersList.push({ id: '1234332', name: userName });

        this.setState({ usersList });
    }
    render() {

        return (
            <>
                <div>
                    <p>Search Panel</p>

                    <input type="text" />
                    <button>Search</button>
                </div>

                <div>
                    <p>Register a user</p>

                    <input type="text" value={this.state.userName} onChange={this.nameChangeHandler} />
                    <button onClick={this.addUserHandler}>Add</button>
                </div>

                <div>
                    {
                        this.state.usersList.map((user) => {

                            return (
                                <div>
                                    <p>{user.name}</p>
                                </div>
                            );
                        })
                    }
                </div>
            </>
        )
    }
}

export default Users;