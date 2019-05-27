import axios from 'axios';
import React, { Component } from 'react';

const API_KEY = "&key=" + process.env.REACT_APP_API_KEY;
const base_url = "https://maps.googleapis.com/maps/api/place/";


class APICaller extends Component {

     constructor (props) {
        super(props);
        
        this.state = {
            data : [], //full data (not reqd.)
            master_search_type: 1,
            type1 : {
                search_type : "nearbysearch/json?",
                location : "&location=38.041341,-78.479807",
                radius : "&radius=5000",
                type : "&type=restaurant",
                openness : "&opennow"
            },
            type2 : {
                search_type : "textsearch/json?",
                search_query : "",
                openness : "&opennow"
            },
            type3 : {
                //map info shit
            },
            final_url : "",
        }
    }
    
    urlMaker() {
        if (this.state.master_search_type === 1) {
            const type1_url = (base_url + 
                    this.state.type1.search_type +
                    this.state.type1.location +
                    this.state.type1.radius + 
                    this.state.type1.type + 
                    this.state.type1.openness + 
                    API_KEY);
            this.setState({final_url : type1_url});
        }
        else if (this.state.master_search_type === 2) {
            const type2_url = (base_url + 
                    this.state.type2.search_type +
                    this.state.type2.search_query + 
                    this.state.type2.openness +
                    API_KEY);
            this.setState({final_url : type2_url});
        } else {
            //format map query?
        }
    }

    componentDidMount() {
        
        axios.get(this.state.final_url).then(res => {
            const dataHolder = res.data.results;
            this.setState({data : dataHolder});
            console.log(this.state.data);
        });
    }

    render() {
        return(<div>
            {this.state.final_url}
        </div>);
    }
}

export default APICaller;