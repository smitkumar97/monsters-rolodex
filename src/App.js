import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import { CardList } from './component/card-list/cardlist.component';
import { SearchBox } from './component/search-box/search-box.component';

class App extends Component {
  constructor(){
    super();
      this.state ={
        monsters:[ ],
        searchField:''
      };
  }

  onSearchChange = event => {
    this.setState({ searchField: event.target.value });
  };

  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
    .then( res => res.json())
    .then(users => this.setState({monsters:users}))  
}

 render() {
   const {monsters, searchField} =this.state;
  //  const monsters= this.state.monsters;
  //  const searchField= this.state.serachField;
  const filterMonster = monsters.filter(monster =>
    monster.name.toLowerCase().includes(searchField.toLowerCase()));
  
  //   return (
  //   <div className="App">
  //     <h1>Monsters Rolodex</h1>
  //     <input type='serach'
  //      placeholder='Search' 
  //      onChange={ e => this.setState({serachField: e.target.value})} />
      
  //     <CardList monsters={filterMonster}>
  //     </CardList>
  //   </div>
  // );
  return (
    <div className='App'>
      <h1>Monsters Rolodex</h1>
      <SearchBox onSearchChange={this.onSearchChange} />
      <CardList monsters={filterMonster} />
    </div>
  );
}
}

export default App;


