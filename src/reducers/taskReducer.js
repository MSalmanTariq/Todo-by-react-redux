var startid = 1;
var INITIAL_STATE = {
  
  
    task: [
       /*  {id:0,
        myTask: {}
    } */
    ]
    
}
const TaskReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "TASK":{
           var taskTemp = state.task;
           var taskObj = {
               id : startid++,
               myTask : action.value
           }
           taskTemp.push(taskObj);
       
           
            return { task: taskTemp }
        }
            break;
            case 'EDIT':
            const updatedItems = state.task.map(item => {
                if(item.id === action.id){
                  return { 
                      id:item.id,
                      myTask : {
                      task : action.value
                  } }
                }
                return item
              })
              return {task : updatedItems}

            break;

            case 'DELETE':
            return {task : state.task.filter(item =>
                item.id !== action.id)}

            break;
        
        default:
            return state
    }
    return state
}



export default TaskReducer