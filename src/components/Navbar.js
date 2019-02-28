import React, { Component } from 'react';


class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">

          <h2>SHOWSRCHR</h2>

        
        <div className="search-container">
          <form onSubmit={this.props.searchForShow}>
            <input type="text" placeholder="Search.." name="search" id="searchBar"/>
            <button type="submit">Submit</button>
          </form>
        </div>
        
      </nav>
    );
  }
}

export default Navbar;