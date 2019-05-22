import axios from 'axios';
import React, { Component } from 'react';

const API_KEY = process.env.REACT_APP_API_KEY;

class Main extends Component {

    state = {data : null, names: null, ratings : null, place : null}

    componentDidMount() {
        const url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=38.041341,-78.479807&radius=50000&type=restaurant&opennow&key=" + API_KEY;
        axios.get(url).then(res => {
                this.setState({ data: res.data.results });
                this.setState({ names: res.data.results.map(item => {
                        this.setState({
                            names : item.name,
                            ratings : item.rating,
                            palce : item.vicinity
                        })
                    })
                })
                console.log(this.state.names)
            }
        );
    }

    render() {
        return (
            <p>{API_KEY}</p>
        );
    }
}

export default Main;
