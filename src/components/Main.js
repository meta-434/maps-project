import axios from 'axios';
import React, { Component } from 'react';

const API_KEY = process.env.REACT_APP_API_KEY;
const url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=38.041341,-78.479807&type=restaurant&radius=5000&type=restaurant&opennow&key=" + API_KEY;



class Main extends Component {

    state = {data : []}
    
    componentDidMount() {
        
        axios.get(url).then(res => {
                const dataHolder = res.data.results;
                this.setState({data : dataHolder});
                console.log(this.state.data);
            }
        );
    }

    render() {
        return (this.state.data.map(item => {
            return (
                <div>
                    <p><i><b>{item.name}</b></i> @ {item.vicinity}, rated <b>{item.rating}</b></p>
                    
                </div>
            )
        }));
    }
}

export default Main;
