import React, { Component } from "react";
import "./App.css";
import Search from "./components/Search";
import SearchResult from "./components/SearchResult";
import Pagination from "./components/common/Pagination";
import { paginate } from "./utils/paginate";

class App extends Component {
  state = {
    results: [],
    currentPage: 1,
    pageSize: 8,
    loading: "initial"
  };

  setResults = results => {
    this.setState({ results });
  };

  processingData = (loading) => {
    if (loading) {
      this.setState({
        loading: "true"
      })
    } else {
      this.setState({
        loading: "false"
      })
    }
  }

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };
  render() {
    const results = paginate(
      this.state.results,
      this.state.currentPage,
      this.state.pageSize
    );
    return (
      <div className="container">
        <div className="container">
          <Search results={this.state.results} setResults={this.setResults} processingData={this.processingData}/>
        </div>

        {(this.state.loading !== "true") ? <div>
        {(this.state.results) ? <div>
          <SearchResult results={results} />
          <Pagination
            itemsCount={this.state.results.length}
            pageSize={this.state.pageSize}
            currentPage={this.state.currentPage}
            pageChange={this.handlePageChange}
          />
          </div> : <div><p className="loading">No data found</p></div>}
        </div>: <p className="loading">Loading....</p> }
      </div>
    );
  }
}

export default App;
