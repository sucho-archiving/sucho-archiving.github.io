---
layout: default
permalink: wacz-upload-aws
title: Uploading WACZ to AWS
---

If you have a big WACZ file that you can't submit via the form, follow these instructions to upload your WACZ directly to AWS.

**Note:** See the *#uploading* channel in Slack to find the credentials in the pinned post.

First, go to https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html

Choose your operating system, and download the installer package. Then, verify the installation worked

On a Mac, open the terminal and run the following at the prompt:$ `which aws`

Next, you need to configure AWS CLI tool. Go to the *#uploading* channel in Slack to get the credentials from the pinned post. DO NOT POST THEM TO THE WEB.

First, enter the following command and fill in the data as follows:

$ `aws configure`

- AWS Access Key ID [None]: 
- AWS Secret Access Key [None]: 
- Default region name [None]:  eu-central-1
- Default output format [None]: json

Once AWS is installed, in the terminal window navigate to the directory where your WACZ file is stored.

Test you can connect to the AWS by doing a directory listing:
$ `aws s3 ls s3://sucho-wacz-upload/`

Now, you'll need the filename of your WACZ file (you can enter $ `ls` to get a list of files in the current directory and then copy and paste, if necessary)

Then, run the command:

$ `aws s3 cp *YOURFILE*.wacz s3://sucho-wacz-upload/`

Note: the folder will *only accept .wacz files*.