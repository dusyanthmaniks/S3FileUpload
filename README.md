Upload S3 ☁️

This action upload File to AWS S3 The Uploaded File will Inherit the Properties of the Bucket

workflow.yml Example

Place in a .yml file such as this one in your .github/workflows folder. Refer to the documentation on workflow YAML syntax here.

name: Upload to S3

on: [pull_request]

jobs:
  upload:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@master
      - uses: dusyanthmaniks/S3FileUpload@v1.0.0
        with:
          aws_key_id: ${{ secrets.AWS_KEY_ID }}
          aws_secret_access_key: ${{ secrets.AWS_SECRET_ACCESS_KEY}}
          aws_bucket: ${{ secrets.AWS_BUCKET }}
          source_dir: 'dirname'
Recommend using with deployment-action in pull request.

name: Preview
on:
  push:
    branches: [ main ]
jobs:
  checkout-App-Code:
    name: Application-Checkout
    runs-on: ubuntu-latest
    steps:
      - name: Code-Checkout
        uses: actions/checkout@v2
      - name: S3-Upload
        uses: dusyanthmaniks/S3FileUpload@v1.0.0
        with:
          aws_key_id: ${{ secrets.AWS_KEY_ID }}
          aws_secret_access_key: ${{ secrets.AWS_SECRET_ACCESS_KEY}}
          aws_bucket: ${{ secrets.AWS_BUCKET}}
          file_name: action.yml
        
     
Action inputs

The following settings must be passed as environment variables as shown in the example. Sensitive information, especially aws_key_id and aws_secret_access_key, should be set as encrypted secrets — otherwise, they'll be public to anyone browsing your repository's source code

name	description
aws_key_id	(Required) Your AWS Access Key.
aws_secret_access_key	(Required) Your AWS Secret Access Key. 
aws_bucket	(Required) The name of the bucket you're upload to.
file_name	(Required) The file or Directory you wish to upload to S3. 
destination_dir	(Optional) The destination directory in S3
If this field is excluded by Default Uploaded to the root of the S3 Bucket if mentioned Creates a New folder(if not available) and uploads the file only the final path should be mentioned excluding the file or directort for upload

