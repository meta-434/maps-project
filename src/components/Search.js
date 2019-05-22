import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {srcVal : ""}
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