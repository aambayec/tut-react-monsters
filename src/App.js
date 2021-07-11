import { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component";
class App extends Component {
  constructor() {
    // super helps us with 'this' by calling React.Component's constructor( )
    super();

    this.state = {
      monsters: [],
    };
  }

  componentDidMount() {
    // fetch is a native js function to call api
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => this.setState({ monsters: users }));
  }

  render() {
    return (
      <div className="App">
        <CardList monsters={this.state.monsters}></CardList>
      </div>
    );
  }
}

export default App;
