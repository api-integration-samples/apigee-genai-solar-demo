echo "Setting project to $PROJECT"
gcloud config set project $PROJECT

echo "Enabling services..."
gcloud services enable aiplatform.googleapis.com
gcloud services enable geocoding-backend.googleapis.com

echo "Creating service account..."
gcloud iam service-accounts create solarservice \
  --description="Service service account" \
  --display-name="Solar Service"

gcloud projects add-iam-policy-binding $PROJECT \
    --member="serviceAccount:solarservice@$PROJECT.iam.gserviceaccount.com" \
    --role="roles/aiplatform.user"