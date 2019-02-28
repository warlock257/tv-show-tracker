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
        currentShow:{},
        defaultSearch:"batman"
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
componentDidUpdate(){
  let showSearch = this.state.defaultSearch
  if (document.getElementById('searchBar').value !== this.state.defaultSearch){
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


// getMainData =() => {
//       let showName = this.state.defaultSearch
// 
//       axios.get(`http://api.tvmaze.com/singlesearch/shows?q=${showName}`)
//       .then((res)=>{
//           this.setState({
//               currentShow:res.data
//           })
//       })
//       .catch((err) =>{
//           console.log(err)
//       })
// }

// getSearchData = () =>{
//     let showSearch = this.state.defaultSearch
//     axios.get(`http://api.tvmaze.com/search/shows?q=${showSearch}`)
//     .then((res) =>{
//       this.setState({
//         searchResults:res.data
//       })
//     })
//     .catch((err)=>{
//       console.log(err)
//     }) 
// }

searchForShow = (ev) =>{
  ev.preventDefault();
  let searchStr = ev.target.search.value
  console.log(ev.target.search.value)
  this.setState({
    defaultSearch:searchStr
  })
}

addToFavorites = () =>{
console.log("add fired")
}


  render() {

    
    return (
      <div className="App">
        <Navbar searchForShow={this.searchForShow} />
        <SearchResults searchResults={this.state.searchResults} addToFavorites={this.addToFavorites}/>
      </div>
    );
  }
}

export default App;


{/* <ShowMain currentShow={this.state.currentShow} /> */}