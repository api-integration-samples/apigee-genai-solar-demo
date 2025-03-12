# Apigee Gen AI Solar Demo

---

This tutorial helps you deploy and test the Gen AI Solar demo with Apigee and Vertex AI Conversations. You need to have set up Apigee already in your GCP project to continue this deployment. Click [here](https://cloud.google.com/apigee/docs/api-platform/get-started/eval-orgs) for instructions on deploying an Apigee evaluation instance, if needed.

Let's get started!

---

## Setup environment

To begin, edit the provided sample `1_env.sh` file, and set the environment variables there for your deployment. Most important is the PROJECT (GCP Project Id) where Apigee is running.

Click <walkthrough-editor-open-file filePath="1_env.sh">here</walkthrough-editor-open-file> to open the file in the editor

Then, source the `1_env.sh` file in the shell.

```sh
source ./1_env.sh
```
When the command has been inserted into your shell, press Enter to run the command.

---

## Setup GCP Project and Deploy Service

Next we are going to configure the Google Cloud project by enabling the services needed, setting the rights of the service account used for the service, and do the deployment of the service to Cloud Run.

Click <walkthrough-editor-open-file filePath="2_deploy.sh">here</walkthrough-editor-open-file> to open the file in the editor, and see the commands that will be run.

Now let's run the script:

```sh
./2_deploy.sh
```
When the command has been inserted into your shell, press Enter to run the command.

<walkthrough-footnote>You will see a lot of command outputs. In case there is an error check if an organizational policy is blocking a service or command from being run. Create an issue in the GitHub repo for any unclear errors. You will also see some instructions to add the service account email to your Google Drive `appsheet` folder with Read access. This is so that our service can read the images taken by the app, and send them to Vertex AI for processing.</walkthrough-footnote>

---

## Insert test data

In order for our service to be recognized by AppSheet and have the API processed, we need to deploy some test data to our project.

Click <walkthrough-editor-open-file filePath="3_loaddata.sh">here</walkthrough-editor-open-file> to open the file in the editor, and see the commands that will insert a test record into our Firestore database.

Now let's run the script:

```sh
./3_loaddata.sh
```
When the command has been inserted into your shell, press Enter to run the command.

<walkthrough-footnote>This is just a test data record. We can delete it through the AppSheet app after configuring and connecting the data source.</walkthrough-footnote>

---

## Test service

Now that we've deployed the service, you can do a test call to see if our test data is returned.

Run this curl command to call our service and return the test inspection image data (including sample image data).

```sh
SERVICE_URL=$(gcloud run services describe $NAME --platform managed --region $REGION --format 'value(status.url)')
curl "$SERVICE_URL/images"
```
When the command has been inserted into your shell, press Enter to run the command.

---

## Conclusion
<walkthrough-conclusion-trophy></walkthrough-conclusion-trophy>

Congratulations! You've successfully deployed the service into your GCP project, now follow the walkthrough instructions to configure your AppSheet app to use the new service.
<walkthrough-inline-feedback></walkthrough-inline-feedback>