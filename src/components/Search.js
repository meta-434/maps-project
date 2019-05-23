import React, { Component } from 'react';
import APICaller from './APICaller';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      srcVal : "",
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
    this._handleSubmit = this._handleSubmit.bind(this);
    this._handleChange = this._handleChange.bind(this);
  }

  _handleChange(event) {
        this.setState({srcVal : event.target.value});
  }

  _handleSubmit(event) {
    console.log(this.state.srcVal);
    event.preventDefault();
  }

 
  render() {
    <APICaller passedprops = {this.state}/>
    return (
        <div>
            <form onSubmit={(e)=>this._handleSubmit(e)}>
                <input type="text" onChange = {(e)=>this._handleChange(e)}/>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
  }
}

export default Search;