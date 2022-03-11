---
layout: default
permalink: folder-upload-aws
title: Folder upload to AWS
---

If you have something more complicated than a WACZ file to upload, be it from custom scraping a website or a failed crawl, you can also upload an entire folder using the `aws` commandline tool. For that purpose you will have to request your own upload credentials via DM from one of our AWS admins.

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
Go to the **#browsertrix** channel in Slack and take a look at the "AWS Upload" bookmark.  Follow the instructions there to request an account and get your personal AWS Access and Secret Keys set up. 

These credentials will only have access to a personal folder in S3, where you will be able to upload any files from either the command line or AWS Console.

## **DO NOT POST THE ACCESS CREDENTIALS TO THE WEB!**

To configure your AWS CLI you can use the follow commands once you've generated your Access Key:

```
aws configure set aws_access_key_id ACCESSKEYIDTHATYOUCREATEDINAWS
aws configure set aws_secret_access_key secretaccesskeythatihopeyousavedwhenyoumadeyouraccesskey
aws configure set default.region eu-central-1
```
If you lose access to your Secret Key there's no harm in creating a new Access/Secret Key and disabling and deleting the old one, just make sure you're not actively uploading anything at the time.

# Uploading

Once the AWS command is configured, navigate to the directory where the folder you want to upload is stored.
Test you can connect to the AWS by doing a directory listing:
```
aws s3 ls s3://sftp.sucho.org/<username>/
```
Make sure to replace <username> with the username you were given when your account was created.

Then, run the command:
```
aws s3 sync yourfolder/ s3://sftp.sucho.org/<username>/yourfolder/
```

The upload should start now and you should be able to see the progress.
