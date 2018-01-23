import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import { HomeComponent } from '../components/home'
import { todo } from "../actions/todoAction";
import ListGen from './listGen'
import '../bootstrap/css/bootstrap.min.css'

class App extends Component {
    addtodo() {
        var temp = this.refs.task.value;
        this.props.myTodo(temp)
       this.refs.task.value = "";
    }
    render() {
        return (
            <div className="App">
                <HomeComponent auth={this.props.taskReducer}  />
                <div className="input-group">
                <input type="text" placeholder="Enter your task" ref="task" className="form-control"/>
                <button onClick={this.addtodo.bind(this)} className="btn btn-large">Add Task</button>
                </div>
                <ListGen auth={this.props.taskReducer.task} />
                
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        taskReducer: state.TaskReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
       myTodo: (task) => { // send name as a param
            dispatch(todo(task)) // send name as a param
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);