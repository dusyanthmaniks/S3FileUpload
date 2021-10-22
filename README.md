Upload S3 ☁️

This action upload File to AWS S3 The Uploaded File will Inherit the Properties of the Bucket

workflow.yml Example

Place in a .yml file such as this one in your .github/workflows folder. Refer to the documentation on workflow YAML syntax here.

name: Upload to S3

on: [pull_request]

<img width="468" alt="Screenshot 2021-10-22 at 1 19 53 PM" src="https://user-images.githubusercontent.com/40063644/138415042-836b136f-3c9a-48dd-a6fc-2c69a2d61d72.png">
Recommend using with deployment-action in pull request.
     
Action inputs

The following settings must be passed as environment variables as shown in the example. Sensitive information, especially aws_key_id and aws_secret_access_key, should be set as encrypted secrets — otherwise, they'll be public to anyone browsing your repository's source code

name	description
aws_key_id	(Required) Your AWS Access Key.
aws_secret_access_key	(Required) Your AWS Secret Access Key. 
aws_bucket	(Required) The name of the bucket you're upload to.
file_name	(Required) The file or Directory you wish to upload to S3. 
destination_dir	(Optional) The destination directory in S3
If this field is excluded by Default Uploaded to the root of the S3 Bucket if mentioned Creates a New folder(if not available) and uploads the file only the final path should be mentioned excluding the file or directort for upload

<img width="774" alt="Screenshot 2021-10-22 at 1 21 35 PM" src="https://user-images.githubusercontent.com/40063644/138415301-eb31a836-b645-4fe7-9fae-eb2fa106e22e.png">

