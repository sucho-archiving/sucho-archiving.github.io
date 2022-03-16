---
layout: default
permalink: wacz-upload-aws
title: Uploading WACZ to AWS
---

If you have a big WACZ file that you can't submit via the Google Form, follow these instructions to upload your WACZ directly to our S3 bucket. If you need to upload more complicated data, like custom scraping results or a failed crawl, you need to request your own upload credentials so that you get access to your personal [AWS upload folder](/folder-upload-aws).

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
Go to the **#browsertrix** channel in Slack to get the shared access credentials from the pinned post.
The access credentials consist of two parts, which work like username and password:
1. The AWS Access Key ID
2. The AWS Secret Access Key

These access credentials have upload-only permissions. This means you can you only read the upload-directory and upload WACZ files.
You will not be able to remove, rename or delete any files or navigate to a different directory.

## **DO NOT POST THE ACCESS CREDENTIALS TO THE WEB!**

First, enter the following commands one after the other:

```
aws configure set aws_access_key_id ACCESSKEYIDFROMTHEBROWSERTRIXCHANNEL
aws configure set aws_secret_access_key secretaccesskeyfromthebrowsertrixchannel
aws configure set default.region eu-central-1
```

# Uploading

Once the AWS command is configured, navigate to the directory where your WACZ file is stored.
Test you can connect to the AWS by doing a directory listing:
```
aws s3 ls s3://sucho-wacz-upload/
```

Then, run the command:
```
aws s3 cp yourfilename.wacz s3://sucho-wacz-upload/
```

The upload should start now and you should be able to see the progress.
