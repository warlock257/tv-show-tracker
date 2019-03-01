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
        favourties:[{
          id:"481",
          imgUrl:"http://static.tvmaze.com/uploads/images/medium_portrait/3/9370.jpg"
        },
        {
          id:"49",
          imgUrl:"http://static.tvmaze.com/uploads/images/medium_portrait/177/444232.jpg"

        },
        {
          id:"32335",
          imgUrl:"http://static.tvmaze.com/uploads/images/medium_portrait/173/434759.jpg"

        },
        {
          id:"17861",
          imgUrl:"http://static.tvmaze.com/uploads/images/medium_portrait/149/373721.jpg"

        }
      ]
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
  console.log('input',inputValue);
  console.log('prev props', prevProps)
  console.log('state', this.state.defaultSearch);
  let showSearch = this.state.defaultSearch
  if (document.getElementById('searchBar').value !== this.state.defaultSearch){
  // if (prevState !== this.state.defaultSearch){
    axios.get(`http://api.tvmaze.com/search/shows?q=${showSearch}`)
    .then((res) =>{
      console.log(res.data)
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
  let searchStr = ev.target.search.value;
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
        <Navbar searchForShow={this.searchForShow} searchRef={this.searchRef} />
        <SearchResults searchResults={this.state.searchResults} addToFavorites={this.addToFavorites}/>
        <Favs favourties={this.state.favourties} />
      </div>
    );
  }
}

export default App;


{/* <ShowMain currentShow={this.state.currentShow} /> */}