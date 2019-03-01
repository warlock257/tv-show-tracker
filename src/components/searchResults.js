import React, { Component } from 'react';

class SearchResults extends Component{
    
    render() {
        let poster = "/placeholder.jpg";

        let shows = this.props.searchResults.map((object)=>{
            //console.log(object.show.image.medium)
            if (object.show.image.medium!==null){
                poster=object.show.image.medium
            } 
            return(
                <div className="singleResult" id={object.show.id}>
                    <img src={poster} alt={object.show.name} />
                    <button onClick={this.props.addToFavorites} name="addFav">+</button>
                </div>
            ) 
          })

        return(
            <div className="posterImage">
            {shows}
            </div>
        )
    }
}

export default SearchResults;

