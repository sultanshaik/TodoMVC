import React , {Component} from "react";


class TodoItem extends Component{

    constructor()
    {
      super();
      this.state = {checkedValue :false}
    }

    toggle(e, id)
    {
      this.setState({
        checkedValue : e.target.checked
      });
      this.props.toggleTaskActive(id);
    }

    removeElement(id)
    {
      debugger;
      this.props.removeElement(id);
    }

    render()
    {
      return (
        <li>
            <div>
              <input type = "checkbox" checked = {this.state.checkedValue} onChange = {(e)=>this.toggle(e, this.props.item.id)}/>
              {this.props.item.task}
              <button onClick = {(e)=>this.removeElement(this.props.item.id)} >Remove</button>
            </div>
        </li>

      );
    }
}

export default TodoItem;
