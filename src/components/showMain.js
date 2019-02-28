import React, { Component } from 'react';


class ShowMain extends Component{

    render() {
        return(
            <div>
                <h1>Selected tv show</h1>
                <img src='http://static.tvmaze.com/uploads/images/medium_portrait/3/9370.jpg' alt="show poster" />

                <h3>Title: {this.props.currentShow.name}</h3>
                <p>Premiered: {this.props.currentShow.premiered}</p>

                
                {/* <p>Summary: {this.props.currentShow.summary}</p> */}
            </div>
        )
    }
}

export default ShowMain

