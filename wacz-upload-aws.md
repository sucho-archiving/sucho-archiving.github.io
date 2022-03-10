---
layout: default
permalink: wacz-upload-aws
title: Uploading WACZ to AWS
---

If you have a big WACZ file that you can't submit via the Google Form, follow these instructions to upload your WACZ directly to our S3 bucket.

# Installation

First, go to https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html

Choose your operating system, and download the installer package.
Then, verify the installation worked by trying to run the `aws` tool.
You should see a screeen like this:
```
usage: aws [options] <command> <subcommand> [<subcommand> ...] [parameters]
To see help text, you can run:

  aws help
  aws <command> help
  aws <command> <subcommand> help

aws: error: the following arguments are required: command
```

# Configuration

Next, you need to configure the AWS commandline tool.
Go to the **#browsertrix** channel in Slack and take a look at the Updated AWS Upload Details bookmark.  Follow the instructions there to request an account and get your personal AWS Access and Secret Keys set up. 

These credentials will only have access to a personal folder in S3, where you will be able to upload WACZ files from either the command line or AWS Console.

## **DO NOT POST THE ACCESS CREDENTIALS TO THE WEB!**

To configure your AWS CLI you can use the follow commands once you've generated your Access Key:

```
aws configure set aws_access_key_id ACCESSKEYIDTHATYOUCREATEDINAWS
aws configure set aws_secret_access_key secretaccesskeythatihopeyousavedwhenyoumadeyouraccesskey
aws configure set default.region eu-central-1
```
If you lose access to your Secret Key there's no harm in creating a new Access/Secret Key and disabling and deleting the old one, just make sure you're not actively uploading anything at the time.

# Uploading

Once the AWS command is configured, navigate to the directory where your WACZ file is stored.
Test you can connect to the AWS by doing a directory listing:
```
aws s3 ls s3://sftp.sucho.org/<username>/
```
Make sure to replace <username> with the username you were given when your account was created.

Then, run the command:
```
aws s3 cp yourfilename.wacz s3://sftp.sucho.org/<username>/
```

The upload should start now and you should be able to see the progress.
