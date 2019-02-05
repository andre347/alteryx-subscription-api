# Alteryx Subscription API

This is a wrapper around the [Alteryx Subscription API](https://gallery.alteryx.com/api-docs/#subscription)
as an NPM module. It has one dependency which will be installed when you install this module: 'oauth-signature'. This module uses Async/Await for fetching data from the API. The Alteryx Subscription API only works for Private Galleries.

The reason for building this wrapper is that the official Alteryx documentation has a jQuery dependency (this one doesn't) and can therefore more easily be used in modern front-end frameworks such as Angular, React and Vuejs.

## Usage

To use this NPM module:

    npm i alteryx-subscription-api

Then, import it in your code:

    import Gallery from "alteryx-subscription-api";

Once imported, you'll need to create a new Gallery object like so:

```javascript
function createGallery() {
  const gallery = new Gallery(apilocation, apikey, apisecret);
  return gallery;
}
```

You can grab the Location, Key and Secret from the API in your Alteryx Gallery by going to Settings - Keys. Make sure you enable the Subscription API.

When you get the gallery object back. You'll have the following API methods (GET / POST) available to you:

- Subscriptions (GET): finds workflows in a subscription - **getSubscriptionWorkflows()**
- App Questions (GET): returns the questions for the given Analytic App - **getAppQuestions(id)**
- Queue an app execution job (POST): Runs the app/workflow and returns the ID of the Job - **executeWorkflow(id)**
- Analytic App Job (GET): Returns the jobs for the given Alteryx Analtytics App. - **getJobsByWorkflow(id)**
- getJob (GET): Retrieves the job and its current state - **getJob(id)**
- Output (GET): Returns output for a given job - **getOutputFileURL(jobId, outputId, format)**

An example for getting all the workflows/apps in your **subscription** in your gallery:

```javascript
async function getWorkflows() {
  const response = await createGallery().getSubscriptionWorkflows();
  const data = await response.json();
  // do something with the data
  console.log(data);
}
```

I've been using this wrapper in combination with Parcel as a build tool and Parcel doesn't really play nice with async/await - you'll get some error messages in your browser console. One way of fixing it is by adding this line to your package.json file:

```javascript
  "browserslist": [
    "last 1 Chrome version"
  ]
```
