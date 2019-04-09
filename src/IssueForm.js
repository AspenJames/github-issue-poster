import React, { Component } from 'react';

class IssueForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      repo: '',
      title: '',
      body: ''
    }
  }


  onChange = (ev) => {
    this.setState({
      [ev.target.name]: ev.target.value
    })
  }

  handleSubmit = (ev) => {
    ev.preventDefault();
    this.props.submitForm(this.state)
  }
  
  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <label>Repo:</label>
          <input type='text'
            name='repo'
            onChange={this.onChange}
            value={this.state.repo} />

          <label>Title:</label>
          <input type='text'
            name='title'
            onChange={this.onChange}
            value={this.state.title} />

          <label>Body:</label>
          <input type='text'
            name='body'
            onChange={this.onChange}
            value={this.state.body} />

          <input type='submit' value="Post Issue" />
        </form>
      </React.Fragment>
    )
  }
}

export default IssueForm;