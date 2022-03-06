---
layout: default
permalink: ia-gsheets
title: Internet Archive Google Sheets
---
# Working with Wayback Machine Google Sheets Service and Internet Archive

## Capturing Internet Archive Links

Under the main SUCHO spreadsheet, you'll see an Internet Archive tab. You can volunteer for these tasks by putting your name in `Claimed By` and changing the status to `In Progress`.

There are instructions in the sheet for how to proceed but generally you should:

1. Copy the link into the wayback machine URL to see if it has been archived recently and check if there are many broken links.
   - If the site looks pretty much functioning then you can mark it as done and start on the next one.
2. If the site is either not listed or the last snapshots were older than a few months, you should go ahead and start copying links into a new google spreadsheet. You can name the spreadsheet anything you like and all you need is one column where you paste URLs. These should generally be top level URLs (so ones you see when you in your browser bar when you move around the site).
3. Also be sure to include URLs for files that are downloadable, like PDFs, images, etc.
   - **You do not need to download files**. Previously we had been suggesting that you do and then upload them manually, but that is no longer our suggestion unless the file is not supported by the Internet archive. If you're unsure freel free to ask questions in either the `#waybackmachine` or `#internetarchive` Slack channels.
4. Once you're done you can submit the file to be processed by the Internet Archive.

## Internet Archive Google Sheets Service

The Internet Archive has a [Google Sheets service](https://archive.org/services/wayback-gsheets/) where you can submit a Google Sheet with the first column full of URLs (just the URLs), and it'll work through archiving them all.

Some of the other individual task tutorials for SUCHO involve building spreadsheets to submit to the Internet Archive in this way.

- [Log into your Internet Archive account](https://archive.org/account/login) (or [create one](https://archive.org/account/signup))
- Go to the [Wayback-GSheets service page](https://archive.org/services/wayback-gsheets/) and log in with whatever Google account you used to create your spreadsheet. Grant it the necessary permissions.
- Once you've authenticated, you'll see 3 large green buttons: *Archive URLs*, *Check if URLs are archived in the Wayback Machine*, and *Check if URLs are available in the Live Web*. We'll be using **Archive URLs**, so click that button.
- Underneath the gray box at the top of the page, there's a field for *Google Spreadsheet URL*. Paste the URL of your spreadsheet with links in that box.
- Check the "Capture outlinks" box
- You can keep the "Capture only if not archived within 6 hours" option enabled
- You can also keep the "Delay the availability of new captures for ~10 hours" option on too
- Hit the green "Archive" button
- You'll get an email that the Internet Archive is processing the spreadsheet, and you can watch the progress in the gray box. You'll get an email when it's done. The spreadsheet will also be updated with info about the status of all the links and what was captured.
- You may need to submit the sheet again after it's done; often things that time out or aren't available can get picked up on a second archiving run (and it won't re-run things it just did, because of that 'Capture only if not archived within 6 hours' option).