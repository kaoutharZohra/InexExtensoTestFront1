import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allChecked: false,
      list: [
        { id: 1, name: "item 1", isChecked: false },
        { id: 2, name: "item 2", isChecked: false },
        { id: 3, name: "item 3", isChecked: false },
         {id: 4, name: "item 4", isChecked: false }
      ]
    };
  }

  handleChange = e => {
    let itemName = e.target.name;
    let checked = e.target.checked;
    this.setState(prevState => {
      let { list, allChecked } = prevState;
      if (itemName === "SelectAll") {
        allChecked = checked;
        list = list.map(item => ({ ...item, isChecked: checked }));
      } else {
        list = list.map(item =>
          item.name === itemName ? { ...item, isChecked: checked } : item
        );
        allChecked = list.every(item => item.isChecked);
      }
      return { list, allChecked };
    });
  };

  renderList = () => {
    return this.state.list.map(item => (
      <div>
        <input
          key={item.id}
          type="checkbox"
          name={item.name}
          value={item.name}
          checked={item.isChecked}
          onChange={this.handleChange}
        />
        <label>{item.name}</label>
      </div>
    ));
  };
  render() {
    return (
      <div>
        <input
          type="checkbox"
          name="SelectAll"
          checked={this.state.allChecked}
          onChange={this.handleChange}
        />
        Select all
        <br />
        {this.renderList()}
      </div>
    );
  }
}

export default App;