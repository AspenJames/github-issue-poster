import React, { Component } from 'react';

class IssueForm extends Component {
  constructor() {
    super();
    this.state = {
      repo: '',
      issueTitle: '',
      issueBody: ''
    }
  }

  handleSubmit = (ev) => {
    ev.preventDefault();
    this.props.submitForm(this.state);
  }

  handleChange = (ev) => {
    this.setState({
      [ev.target.name]: ev.target.value
    });
  }

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='repo'>Repo name:</label>
          <input type='text'
            name='repo'
            onChange={this.handleChange}
            value={this.state.repo} />

          <label htmlFor='issueTitle'>Issue title:</label>
          <input type='text'
            name='issueTitle'
            onChange={this.handleChange}
            value={this.state.issueTitle} />

          <label htmlFor='issueBody'>Issue body:</label>
          <input type='text'
            name='issueBody'
            onChange={this.handleChange}
            value={this.state.issueBody} />

          <button type='submit'>Submit Issue</button> 
        </form>
      </React.Fragment>
    )
  }
}

export default IssueForm;