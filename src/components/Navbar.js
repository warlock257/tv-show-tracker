import React, { Component } from 'react';


class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">

          <h2>MY SHOWS</h2>

        
        <div className="search-container">
          <form action="/search-results">
            <input type="text" placeholder="Search.." name="search"/>
            <button type="submit">Submit</button>
          </form>
        </div>
        
      </nav>
    );
  }
}

export default Navbar;