import React, { Component } from 'react';
import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;

class Main extends Component {
    
    state = {res : null, place : null}

    sortData(pArr) {
        console.log(pArr);
    }

    componentDidMount() {
        console.log("cdm did run")
        const url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=38.041345,-78.479844&radius=5000&type=restaurant&opennow&key=" + "AIzaSyCQDAAoCqWAZ5peUp3GLtxZDcXsm9qPe14";
        axios.get(url).then(response => {
            console.log(response);
            
        });
    }

    render () {
        return (
            <div>
                <p>Charlottesville Restaurants</p>
            </div>
        );
    }
}

export default Main;
