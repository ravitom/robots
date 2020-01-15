import React, { Component } from "react";
import { CardList } from "./components/robots-list/robot-list.component";
import { Search } from "./components/search/search.component";
import logo from "./cover.png";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: ""
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ robots: users }));
  }

  handleChanges = e => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { robots, searchField } = this.state;
    const filterMonster = robots.filter(robot =>
      robot.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div>
        <header>
          <img width="200" src={logo} alt="Smiley face"></img>
        
        </header>
        <Search
          placeholder="Search Robot"
          handleChanges={this.handleChanges}
        ></Search>
        <CardList robots={filterMonster}></CardList>
      </div>
    );
  }
}
export default App;
