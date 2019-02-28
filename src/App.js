import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import './main.scss'
import ShowMain from './components/showMain'
import Navbar from './components/Navbar';
import SearchResults from './components/searchResults'

class App extends Component {
  constructor(){
    super()
    this.state = {
        searchResults: [],
        currentShow:{}
    }
}

componentDidMount(){
  this.getMainData()
  this.getSearchData()
}

getMainData =() => {
      let showName = "game-of-thrones"

      axios.get(`http://api.tvmaze.com/singlesearch/shows?q=${showName}`)
      .then((res)=>{
          console.log(res.data)
          this.setState({
              currentShow:res.data
          })
      })
      .catch((err) =>{
          console.log(err)
      })
}

getSearchData = () =>{
    let showSearch = "batman"
    axios.get(`http://api.tvmaze.com/search/shows?q=${showSearch}`)
    .then((res) =>{
      this.setState({
        searchResults:res.data
      })
    })
    .catch((err)=>{
      console.log(err)
    }) 
}


  render() {




    return (
      <div className="App">
        <Navbar />
        <SearchResults searchResults={this.state.searchResults} />

        <ShowMain currentShow={this.state.currentShow} />
      </div>
    );
  }
}

export default App;
