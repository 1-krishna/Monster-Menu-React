import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import { CardList } from './components/card-list/card-list.component';

class App extends Component{

  constructor(){
    super();

    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => {this.setState({monsters : users}); /*console.log(users)*/})
  }

  
  render(){
    const {monsters, searchField} = this.state;
    //the above line is equivalent to below 2 lines
    //const monsters = this.state.monsters;
    //const searchField = this.state.searchField;

    const filteredMonsters = monsters.filter(monster => {return (monster.name.toLowerCase().includes(searchField.toLowerCase()) 
      || monster.email.toLowerCase().includes(searchField.toLowerCase()))});

    return(
    <div className="App">
      <h1>Monster Menu</h1>
      <input type="search" placeholder="search for monsters"
        onChange={e => {this.setState({searchField: e.target.value}, ()=> {console.log(this.state)})}}
      />
      <CardList monsters={filteredMonsters}></CardList>
      
    </div>
    );
  }
}

export default App;
