import React, {Component} from "react";

class TaskList extends Component{


  removeElement(id)
  {

  }
  render()
  {
    return (
      <div>
        <ul>
        {
          this.props.taskList.map((x, index)=>{
          return (<li key = {index}><input type = "checkbox"/><span>{x}</span><button/></li>)
          })
        }
        </ul>
      </div>
    );
  }

}

export default TaskList;
