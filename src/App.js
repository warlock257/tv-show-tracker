import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import './main.scss'
import ShowMain from './components/showMain'
import Navbar from './components/Navbar';
import SearchResults from './components/searchResults'
import Favs from './components/favs'

class App extends Component {
  constructor(){
    super()
    this.searchRef = React.createRef();
    this.state = {
        searchResults: [],
        currentShow:{},
        defaultSearch:"batman",
        favourties:[]
    }
}

componentDidMount(){
  let showSearch = this.state.defaultSearch

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
componentDidUpdate(prevProps, prevState){
  let inputValue = this.searchRef.current;
  //console.log('input',inputValue);
  //console.log(prevProps)
  //console.log('state', this.state.defaultSearch);
  let showSearch = this.state.defaultSearch
  if (prevProps !== showSearch){
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
}


searchForShow = (ev) =>{
  ev.preventDefault();
  let searchStr = ev.target.search.value;
  console.log(ev.target.search.value)
  this.setState({
    defaultSearch:searchStr
  })
}


addToFavorites = (ev) =>{
  let tvRageId = ev.target.id
  axios.get(`http://api.tvmaze.com/lookup/shows?tvrage=${tvRageId}`)
  .then((res) => {
    let favId = res.data.id;
    let favImg = res.data.image.medium
    console.log(favId)
    console.log(favImg)
    let objToPush = {
      id:favId,
      imgUrl:favImg
    }
    this.setState({
      favourties:[...this.state.favourties, objToPush]
    })
  })

  .catch((err) =>{
    console.log(err)
  })
}


  render() {

    
    return (
      <div className="App">
        <Navbar searchForShow={this.searchForShow} searchRef={this.searchRef} />
        <SearchResults searchResults={this.state.searchResults} addToFavorites={this.addToFavorites}/>
        <Favs favourties={this.state.favourties} />
      </div>
    );
  }
}

export default App;


{/* <ShowMain currentShow={this.state.currentShow} /> */}