import React, { Component } from 'react';


class Favs extends Component {
  render() {

let favMap = this.props.favourties.map((object) =>{
    return (
        
            <div className="favImgs" id={object.id}>
                <img src={object.imgUrl} />
                <div className="counter-wrap">
                    <div className="season_wrap">
                        <label for ="season">Season</label>
                        <input id ="season" type ="number"
                        min="1"max="100" step ="1" />
                    </div>
                        <div className="season_wrap">
                        <label for ="episode">Episode</label>
                        <input id ="episode" type ="number" 
                        min="1"max="100" step ="1" />
                    </div>
                </div>
            </div>
        
    )
})

    return (
      <div className="favs">
        <h2>Favourite shows</h2>
        <div className="image-wrap"> 
        {favMap}
        </div>
      </div>
    );
  }
}

export default Favs;