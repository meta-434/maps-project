import APICaller from './APICaller.js';
import React, { Component } from 'react';

const API_KEY = "&key=" + process.env.REACT_APP_API_KEY;
const base_url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?";



class RestaurantList extends Component {
    constructor (props) {
        super(props);
    }



    render() {
        
        return (this.state.data.map(item => { //change to prop
            return (
                <div>
                    <p><i><b>{item.name}</b></i> @ {item.vicinity}, rated <b>{item.rating}</b></p>
                </div>
            )
        }));
    }
}

export default RestaurantList;
