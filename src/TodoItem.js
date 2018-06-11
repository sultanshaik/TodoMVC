import React , {Component} from "react";


class TodoItem extends Component{

    constructor()
    {
      super();
      this.state = {checkedValue :false}
    }

    toggle(e)
    {
      this.setState({
        checkedValue : e.target.checked
      });
    }

    removeElement()
    {
      debugger;
    }

    render()
    {
      return (
        <li>
            <div>
              <input type = "checkbox" checked = {this.state.checkedValue} onChange = {(e)=>this.toggle(e)}/>
              {this.props.item.task}
              <button onClick = {()=>this.removeElement()} >Remove</button>
            </div>
        </li>

      );
    }
}

export default TodoItem;
