#!/bin/bash
set -e

bucket_name="connext.network"
static_folder="build"

echo "Deploying $static_folder contents to s3 bucket: $bucket_name"
sleep 1

# Make sure the resources we're about to deploy are up-to-date
npm install
npm run build

if [[ -n "$AWS_ACCESS_KEY_ID" || -n "$AWS_SECRET_ACCESS_KEY" ]]
then
  # Create bucket if it doesn't exist
  if [[ -z "`aws s3api list-buckets | grep '"Name":' | grep "$bucket_name"`" ]]
  then echo "Creating bucket $bucket_name" && aws s3api create-bucket --bucket $bucket_name
  else echo "AWS S3 bucket $bucket_name already exists"
  fi

  echo "Uploading static files to $bucket_name";echo
  sleep 3 # last chance to ctrl-c before uploads start

  for file in `find $static_folder -type f -not -name ".*"`
  do aws s3 cp "$file" "s3://$bucket_name/${file#build/}"
  done

  echo;echo "Done, site resorces have been deployed to $bucket_name"

else
  echo "No access keys found, couldn't deploy to AWS S3"
fi
