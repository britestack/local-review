// Import required AWS SDK clients and commands for Node.js
const {
  S3Client,
  PutObjectCommand,
  CreateBucketCommand,
  GetBucketAclCommand
} = require("@aws-sdk/client-s3");
require('dotenv').config({path: 'variables.env'});

// Set the AWS region
const REGION = "us-west-1"; 

// Set the bucket parameters
const bucketName = "hack-reactor-images";
const bucketParams = { Bucket: bucketName };

// Create name for uploaded object key
const keyName = "computer.jpg";
const objectParams = { Bucket: bucketName, Key: keyName };
// const objectParams = { Bucket: bucketName, Key: keyName, Body: "./abc.txt" };

// Create an S3 client service object
const s3 = new S3Client({ region: REGION });

const run = async () => {
  // Create S3 bucket
  // try {
  //   const data = await s3.send(new CreateBucketCommand(bucketParams));
  //   console.log("Success. Bucket created.");
  // } catch (err) {
  //   console.log("Error", err);
  // }
  // try {
  //   const results = await s3.send(new PutObjectCommand(objectParams));
  //   console.log("Successfully uploaded data to " + bucketName + "/" + keyName);
  // } catch (err) {
  //   console.log("Error", err);
  // }
  try {
    const results = await s3.send(new GetBucketAclCommand({Bucket: 'hack-reactor-images'}));
    console.log("Successfully recieved data: ", results);
  } catch (err) {
    console.log("Error", err);
  }
};

// run();