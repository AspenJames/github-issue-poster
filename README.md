# GitHub Issue Poster

## GitHub API 

GitHub provides a couple APIs for programatically interacting with their service. We'll be creating a form to create an issue on an existing repo. 

## API Key

You'll need to generate an API key in order to be able to make requests to the GitHub API. You can do this in your GitHub settings:

- Go to github.com
- Click on your profile and select "Settings"
- Select "Developer Settings"
- Select "Personal Access Token"
- Click on "Generate New Token"
- Enter in a description - this can be anything
- **Be sure to select the "Repo" scope**
- Put this key in `src/key.js` in the following format: 

```js
export const api_key = 'your API key'
```

## API Endpoints

The [GitHub API documentation](https://developer.github.com/v3/) is very detailed, including example requests and responses. 
We'll be [creating an issue](https://developer.github.com/v3/issues/#create-an-issue) in this exercise, so review the documentation there!

Our endpoint is almost set up in `src/GitHubContainer.js` - we just need to interpolate the repo that we pull from the form submission. 
We'll also need to set up the body of our request as per the documentation's specifications to send our issue title and content.

## The form

We need inputs for the repo, issue title, and issue body. The repo field will accept a string in this format: "github_username/repo"
Don't worry about validating this, we'll use the error result view to inform the user of proper data. 

Set up controlled inputs for each of these fields - bonus points for preventing the `fetch` request without each field filled out!
`IssueForm` receives a callback function called `submitForm` that you can call when you have data you are ready to `fetch`.

## Return data

Make a few practice requests using [Postman](https://www.getpostman.com/downloads/), your browser, or just check the example returns in the documentation.
We'll want to display one of two things depending on the type of data returned. Our GitHubContainer has state for a `result` or `error` - both of these 
default to `null`, and are only set when appropriate. They are reset to `null` on each form submission to ensure that only one of these is set at any one time.
Our `Results` component will conditionally render based on the props it receives, so all you have to worry about is setting the state appropriately. 
For a successful issue post, we'll need the issue title, body, and `html_url`. For an error, set the error state to anything you'd like.

