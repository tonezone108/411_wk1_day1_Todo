import React, { Component } from "react";
import { render } from "@testing-library/react";

class Todo extends Component {
  state = {
    text: "",
    listItems: []
  };

  handleClicked = () => {
    const items = [...this.state.listItems];
    items.push(this.state.text);
    this.setState({ listItems: items });
  };

  handleTextChange = e => {
    this.setState({ text: e.target.value });
  };
  render() {
    return (
      <div>
        <input type="text" onChange={this.handleTextChange} />
        <button onClick={this.handleClicked}>Add Task</button>
        {this.state.listItems.map(value => {
          return <p className="listItem">{value}</p>;
        })}
      </div>
    );
  }
}

export default Todo;
