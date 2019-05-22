<<<<<<< Updated upstream
import React, { Component } from 'react';
import axios from 'axios';
=======
import axios from 'axios';
import React, { Component } from 'react';
>>>>>>> Stashed changes

const API_KEY = process.env.REACT_APP_API_KEY;

class Main extends Component {
<<<<<<< Updated upstream
    
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
=======

    state = {res : null, names: null, prices : null, }

    componentDidMount() {
        const url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=38.041341,-78.479807&radius=50000&type=restaurant&opennow&key=" + API_KEY;
        axios.get(url).then(response => 
            this.setState({res : response.data.results}),
            console.log(this.state.res),
            this.state.res.map(item => this.setState({names : item}))  
        );
    }

    render() {
        return (
            console.log(this.state.names),
            <p>{API_KEY}</p>
>>>>>>> Stashed changes
        );
    }
}

<<<<<<< Updated upstream
export default Main;
=======
export default Main;
>>>>>>> Stashed changes
