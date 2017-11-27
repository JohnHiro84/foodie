import React from 'react';
import './App.css';

import BusinessList from './components/BusinessList/BusinessList';
import SearchBar from './components/SearchBar/SearchBar';
import Yelp from './util/Yelp';

/*
const business = {
  imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
  name: 'MarginOtto Pizzeria',
  address: '1010 Paddington Way',
  city: 'Bordertown',
  state: 'NY',
  zipCode: '10101',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90
};


const businesses = [
business,
business,
business,
business,
business,
business,

];
*/

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {businesses:[]};
    this.searchYelp = this.searchYelp.bind(this)

  }

  searchYelp(term, location, sortBy) {
    Yelp.search(term, location, sortBy).then(businesses =>
      {this.setState({businesses:businesses})}
    );

  };


  /*
  searchYelp(term, location, sortBy) {
    Yelp.search(term,location, sortBy){
      another(businesses){
        this.setState({businesses:businesses});
      }
    }
  }
*/

  render() {
    return (
      <div className="App">
        <h1>ravenous</h1>
        <SearchBar searchYelp={this.searchYelp} />
        <BusinessList businesses={this.state.businesses} />
      </div>
    );
  }
}

export default App;



/* AY work..
import React from 'react';
import './App.css';
import BusinessList from './components/BusinessList/BusinessList';
import SearchBar from './components/SearchBar/SearchBar';

import logo from './logo.svg';

let business = {
  imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
  name: 'MarginOtto Pizzeria',
  address: '1010 Paddington Way',
  city: 'Flavortown',
  state: 'NY',
  zipCode: '10101',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90
}

let businesses = [business, business, business, business, business, business];

class App extends React.Component {

  searchYelp(term, location, sortBy){
    console.log(`searching Yelp with  ${this.state.term}, ${this.state.location}, ${this.state.best_match}`);
  };

  render() {
    return (
      <div className="App">
        <h1>ravenous</h1>

        < BusinessList businesses={businesses}/>
        < SearchBar />

      </div>
    );
  }

}

/
//export default businesses;
export default App;
//get an error message saying only one default export allowed


*/
