import React, { Component } from 'react';

class SearchResults extends Component{

    render() {

        let shows = this.props.searchResults.map((object)=>{
            return <p key={object.show.id}>{object.show.name} </p>
          })

        return(
            <div>
            {shows}
            </div>
        )
    }
}

export default SearchResults;

