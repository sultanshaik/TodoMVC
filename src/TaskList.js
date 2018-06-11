import React, {Component} from "react";
import TodoItem from "./TodoItem.js";

class TaskList extends Component{

  render()
  {
    return (
      <div>
        <ul>
        {
          this.props.taskList.map((x, index)=>{
              debugger;
          return <TodoItem key= {x.id}  item = {x} />
          })
        }
        </ul>
      </div>
    );
  }

}

export default TaskList;
