import React from 'react';

export class HomeComponent extends React.Component {
    // constructor(props) {
    //     super(props);
    // }
    render() {
        console.log(this.props.auth)
        return (
            <div>
                <h1>Todo List</h1>
                <h5>Muhammad Salman Tariq</h5>
               
                
            </div>
        )
    }
}

