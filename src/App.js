import './App.css';
import React from 'react';
import { CardList } from './components/card-list/card-list-component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  onSearchChange = (value) => {
    this.setState({searchField: value});
  }

  render() {
    const { monsters, searchField } = this.state;
    const monstersFiltered = monsters.filter((monster) => 
        monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox placeholder="search monsters" onSearchChange={this.onSearchChange} />
        <CardList monsters={monstersFiltered} />
      </div>
    );
  }
}

export default App;
