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
    const postData = {
      title: data.issueTitle,
      body: data.issueBody
    };

    this.setState({
      result: null,
      error: null
    })
    
    fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': `token ${api_key}`,
        'Accept': 'application/vnd.github.v3+json',
        'Content-Type': 'applicaton/json'
      },
      body: JSON.stringify(postData)
    }).then(res => res.json())
      .then(json => {
        if (json.body) {
          let {body, title, html_url} = json;
          this.setState({
            result: {body, title, html_url}
          });
        } else {
          this.setState({
            error: "womp womp"
          });
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
