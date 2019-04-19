import React, { Component } from "react";
import axios from "axios";
import logo from '../logo.png';
const { parseString } = require("xml2js");
const apiKey = "PZ7LbjyeLd4geuSKWEZg";

class Search extends Component {
  state = {
    searchText: "",
    errors: {},
    processingData: false,
  };

  OnSearchClick = () => {
    this.setState({
      processingData: true
    });
    this.props.processingData(true);
    const { searchText } = this.state;
    const goodreadsURI =
      `https://cors-anywhere.herokuapp.com/` +
      `https://www.goodreads.com/search/index.xml?key=${apiKey}&q=${searchText}`;

    axios
      .get(goodreadsURI)
      .then(res => {
        parseString(res.data, (err, result) => {
          this.setState(
            {
              processingData: false
            },
            this.props.setResults(
              result.GoodreadsResponse.search[0].results[0].work
            )
          );
          this.props.processingData(false);
        });
      })
      .catch(err => {
        this.props.processingData(false);
        this.setState({
          errors: err,
          processingData: false
        });
      }
      );
  };

  onInputSearchText = event => {
    this.setState({
      searchText: event.target.value
    });
  };

  render() {
    return (
      <div>
      <header>
        <img src={logo} alt="logo"/>
      </header>
      <div className="form-group">
        <input
          className="form-control"
          type="text"
          placeholder="Search for books..."
          name="searchText"
          onChange={this.onInputSearchText}
          value={this.state.searchText}
        />
        <button
          className="btn btn-primary"
          onClick={this.OnSearchClick}
        >
          Search
        </button>
      </div></div>
    );
  }
}

export default Search;
