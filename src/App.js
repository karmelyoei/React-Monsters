import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component.jsx';

class App extends Component {
  state = {
    monsters: [],
    searchFeild: '',
  };
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((response) => this.setState({ monsters: response }))
      .catch((err) => console.log(err));
  }
  render() {
    const { searchFeild, monsters } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchFeild.toLowerCase())
    );
    return (
      <div>
        <SearchBox
          placeholder="search Monsters"
          handleChange={(e) => {
            this.setState({ searchFeild: e.target.value });
          }}
        />
        <CardList monsters={filteredMonsters} />;
      </div>
    );
  }
}

export default App;
