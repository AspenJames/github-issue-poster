import React, { Component } from 'react';
import './App.css';

import IssueForm from './IssueForm';
import Results from './Results';
import { api_key } from './key';

class GitHubContainer extends Component {

  constructor() {
    super();
    this.state = {
      result: null,
      error: null
    };
  }

  submitForm = (data) => {
    const url = `https://api.github.com/repos/${data.repo}/issues`;

    // build our body of the request
    const postData = {
      // let's set this up
    };

    // reset state to clear Results component
    this.setState({
      result: null,
      error: null
    })
    
    // so fetch
    fetch(url, {
      headers: {
        'Authorization': `token ${api_key}`,
        'Accept': 'application/vnd.github.v3+json',
        'Content-Type': 'applicaton/json'
      },
      body: ''// use postData from above
    }).then(res => res.json())
      .then(json => {
        if (json.body) {
          // if we posted the issue, set the state for "result"
          // we need a few pieces of data from the result returned:
          // issue title, issue body, and html_url
        } else {
          // set the state for "error"
          // doesn't really matter how for our basic example
        }
      });
  }

  render() {
    return (
      <div>
        <IssueForm submitForm={this.submitForm} />
        {this.state.result && <Results result={this.state.result} />}
        {this.state.error && <Results error={this.state.error} />}
      </div>
    );
  }
}

export default GitHubContainer;
