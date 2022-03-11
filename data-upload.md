---
layout: default
permalink: data-upload
title: "Where do I upload the data?"
---

Here's what we're doing with the data we gather as part of SUCHO.

## WACZ files
If you're using the [WebRecorder plugin](/webrecorder-plugin-instructions) or [WebRecorder app](/archivewebpage-app-instructions), the last step is to download a WACZ file. You'll also end up with a WACZ file if you're using Browsertrix to crawl sites.

If you have a WACZ file, go to the [WACZ upload form](https://forms.gle/N18MxWgoHtPB2xpz8). Enter the metadata and upload the WACZ file.

The WACZ form only accepts files up to 10 GB, so if you have a larger archive, you'll need to [upload WACZ to AWS](/wacz-upload-aws).

## AWS Upload folder

If you have more complicated data, such as the results of a custom scrape or a failed crawl, you will need to request AWS access credentials to receive access to your own [AWS upload folder](/folder-upload-aws).

## PDFs, images, other files
SUCHO now has a collection on the Internet Archive! If you put *sucho-id-* at the beginning of the Page URL field, it will automatically be added to the collection. (This only applies to files you're uploading -- PDFs, images, DJVU, etc. Wayback Machine links don't go in a collection.)

If you have scraped other kinds of files (e.g. images, PDFs from journals, or other materials), zip them up into sensible batches (e.g. all PDFs from a given journal or journal issue, all page images from a particular book) and upload them to the Internet Archive. There's a [guide to uploading things to the Internet Archive here](https://help.archive.org/category/archive-org/uploading/). 
* Fill in as much metadata as you can, including the source URL you got the data from. Put the URL of the file(s) once they're uploaded to the Internet Archive in the SUCHO working spreadsheet. Everything will be aggregated in the [Internet Archive Collection for SUCHO](https://archive.org/details/sucho?tab=collection).
* [Guide](https://docs.google.com/document/d/1qpax1HQmWOVXqbA9NTCU4WBZNWKfLPhUTqxs7s94Jas/edit?usp=sharing) to filling in metadata fields

**If you are unsure about whether to download files and upload them to the Internet Archive, please ask on Slack and also see [updated guidelines for Internet Archive captures](ia-gsheets).**
