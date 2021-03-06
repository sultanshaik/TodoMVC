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
          return <TodoItem toggleTaskActive = {(id)=>this.props.toggleTaskActive(id)} removeElement = {(id) => this.props.removeElement(id)} key= {x.id}  item = {x} />
          })
        }
        </ul>
      </div>
    );
  }

}

export default TaskList;
