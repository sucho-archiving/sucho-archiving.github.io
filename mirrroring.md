---
layout: default
permalink: mirroring
title: Mirroring the SUCHO web archives
---

# Mirroring the SUCHO web archives

The SUCHO Web Archives are publicly accessible as a dataset on the AWS OpenData Program. You can help us secure their safety by mirroring the S3 bucket. We recommend that you reserve 100TB of disk space for the mirror.

## Step 1: Check the Open Data registry

Check the [SUCHO entry of the AWS Open Data registry](https://registry.opendata.aws/sucho/) for the description of the dataset and the S3 bucket name.

## Step 2: Download and install the AWS CLI

Install the `aws` CLI according to the [install instructions](https://aws.amazon.com/cli/). Alternative you can also use [rclone](https://rclone.org/) or [s3cmd](https://s3tools.org/s3cmd).

## Step 3: Sync the SUCHO bucket

Since the SUCHO Open Data bucket is publicly accessible, you need no access credentials to access it. If you do not have an AWS account, you can use the CLI flag `--no-sign-request` to access the bucket fully anonymously.

Please use the sync command to copy bucket. Using the sync command will ensure that possible deletions, renames or other file operations made in the Open Data bucket will be mirrored to your destination.

Assuming your destination directory is a folder called `/sucho-mirror` the AWS sync command would look like this:
`aws s3 sync --no-sign-request s3://sucho-opendata/ /sucho-mirror/`.

To optimise transfer speeds, you can tweak the settings `multipart_chunksize` and `max_concurrent_requests`. The average file size of the bucket is ca. 750MB, so you could set the chunk size to 512MB without problems.


   
