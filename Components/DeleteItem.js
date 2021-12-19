import React from "react";

class Example extends React.Component {
  constructor() {
    this.state = {
      data: [
        { id: 1, name: "Hello" },
        { id: 2, name: "World" },
        { id: 3, name: "How" },
        { id: 4, name: "Are" },
        { id: 5, name: "You" },
        { id: 6, name: "?" },
      ],
    };
  }

  // shorter & readable
  delete(item) {
    const data = this.state.data.filter((i) => i.id !== item.id);
    this.setState({ data });
  }

  render() {
    const listItem = this.state.data.map((item) => {
      return (
        <div key={item.id}>
          <span>{item.name}</span>{" "}
          <button onClick={this.delete.bind(this, item)}>Delete</button>
        </div>
      );
    });
    return <div>{listItem}</div>;
  }
}

React.render(<Example />, document.getElementById("container"));
