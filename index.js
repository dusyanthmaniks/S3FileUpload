const core = require('@actions/core');
const S3 = require('aws-sdk/clients/s3');
const fs = require('fs');
const path = require('path');
const klawSync = require('klaw-sync');
const { lookup } = require('mime-types');

const AWS_KEY_ID = core.getInput('aws_key_id', {required: true});
const SECRET_ACCESS_KEY = core.getInput('aws_secret_access_key', {required: true});
const BUCKET = core.getInput('aws_bucket', {required: true});
const FILE_NAME = core.getInput('file_name', {required: true});
const DESTINATION_DIR = core.getInput('destination_dir', {required: false});
var FILE
const s3 = new S3({
    accessKeyId: AWS_KEY_ID,
    secretAccessKey: SECRET_ACCESS_KEY
  });

  var uploadFile = (FILE_NAME) =>{
    if(DESTINATION_DIR === '/'){
        FILE = FILE_NAME
    }
    else{
        FILE = path.join(DESTINATION_DIR,FILE_NAME)
    }
    //to Read the Contents from File
    var content = fs.readFileSync(FILE_NAME);
        const params = {
        Bucket: BUCKET,
        Key: FILE,
        Body: content
    };
//Uploadinf Files to S3 Bucket
        s3.upload(params, function(err,data){
        if (err) {throw err;}
        console.log("Upload of the File console.log is Successful")
    });
}
uploadFile(FILE_NAME)