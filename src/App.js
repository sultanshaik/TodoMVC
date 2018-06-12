import React, { Component} from "react";
import TaskList from "./TaskList.js"

class App extends Component{

  constructor()
  {
    super();
    this.state = {task:'' , listOfTasks : []};
  }

  handleChange(e)
  {
      this.setState({task : e.target.value});
  }

  addTaskToList(e)
  {
    if(e.keyCode === 13)
    {
      let task  =
      {
        "id" : Date.now(),
        "task" : this.state.task,
        "Completed" : false
      }

      this.setState(
        {
          task : '',
          id : Date.now(),
          listOfTasks : [task ,...this.state.listOfTasks]
        }
      );
    }

  }

  toggleTaskActive(id)
  {
    var listOfTasks  = this.state.listOfTasks;
    for( var x in listOfTasks)
    {
      if(listOfTasks[x].id === id)
      {
        listOfTasks[x].Completed  = !listOfTasks[x].Completed ;
      }
    }
  }

  removeElement(id)
  {
    var listOfTasks  = this.state.listOfTasks;
    this.setState({listOfTasks : listOfTasks.filter(ele=>
        {
            return ele.id!==id
        })
      }
    );
  }

  render(){
    return(
      <div>
        <h3>Todos</h3>
        <input placeholder = "What needs to be done?" onKeyDown = {(e)=>this.addTaskToList(e)} onChange = {(e)=>this.handleChange(e)}></input>
        <TaskList toggleTaskActive= {(id)=>this.toggleTaskActive(id)} removeElement = {(id) => this.removeElement(id)} taskList = {this.state.listOfTasks} />
        <a href = "#">All</a> <a href  = "#">Active</a> <a href = "#">Completed</a>
      </div>
    );
  }
}

export default App;
