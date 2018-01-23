import React from 'react';
import { connect } from 'react-redux';
import { edit } from "../actions/editAction";
import { del } from "../actions/delAction";
import '../bootstrap/css/bootstrap.min.css'

export class ListGen extends React.Component {
     constructor(props) {
         super(props);
     }

    editList(id){
      var text = prompt("Edit your task");
      this.props.editTodo(id,text);
    }

    deleteList(id){
        this.props.deleteTodo(id);
    }

    
    render() {
       
       console.log(this.props.auth)
        return (
            <div>
               <ul className="list-group">
             { this.props.auth.map((item, index) => <li className="list-group-item" key={item.id}>{item.myTask.task}
            
             <button className="btn btn-warning float-right" onClick={() => {this.deleteList(item.id)}}>Delete</button>
             <button className="btn btn-primary float-right"  onClick={() => {this.editList(item.id)}}>Edit</button>
             </li>) }

               </ul>
                
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        taskReducer: state.TaskReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
       editTodo: (id,newTask) => {
           console.log(id,newTask) // send name as a param
            dispatch(edit(id,newTask)) // send name as a param
        },
        deleteTodo:(id) => {
            console.log(id) // send name as a param
             dispatch(del(id)) // send name as a param
         }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListGen);