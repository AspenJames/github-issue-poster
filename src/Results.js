import React from 'react';

const Results = (props) => {
  if (props.error) {
    return (
      <div>
        <h2>Something went wrong!</h2>

        <p>Please make sure you've entered all fields correctly.</p>
        <p>Repo name should only contain "username/reponame"</p>
        <p>Issue title and body are both required!</p>
      </div>
    );
  } else {
    return (
      <div>
        <h2>Issue posted successfully!</h2>

        <h3><a href={props.result.html_url}>{props.result.title}</a></h3>
        <p>{props.result.body}</p>
      </div>
    );
  }
}

export default Results;