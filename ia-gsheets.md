---
layout: default
permalink: ia-gsheets
title: Internet Archive Google Sheets
---
# Working with Wayback Machine Google Sheets Service and Internet Archive

## Capturing Internet Archive Links

Under the main SUCHO spreadsheet, you'll see an Internet Archive (IA) tab. That tab lists as the sites that need to be backuped to IA. Often times you will also see the same site listed under the `Broswertrix` tab, and that's not an error - we are trying to have backups of our backups. You can volunteer for archiving a website to IA by putting your name in `Claimed By` and changing the status to `In Progress`.

There are instructions in the sheet for how to proceed, but generally you should:

1. Copy the link into the wayback machine URL <https://archive.org/web/> to see if it has been archived recently and check if there are many broken links.
   - If the site looks pretty much functioning as you click around and you don't see any 400 or 300 errors, then you can mark it as done and start on the next one.
2. If the site is either not listed or the last snapshots were older than a few months, you should go ahead and start copying links into a new google spreadsheet. You can name the spreadsheet anything you like, and all you need is one column where you paste each of the URLs. These should generally be top level URLs (so ones you see in your browser bar when you move around the site).
3. Also be sure to include URLs for files that are downloadable, like PDFs, images, etc.
   - **You do not need to download files**. Previously we had been suggesting that you do download these, and then upload them manually, but that is no longer our suggestion unless the file is not supported by the Internet archive. If you're unsure feel free to ask questions in either the `#waybackmachine` or `#internetarchive` Slack channels.
4. Once you're done you can submit the file to be processed by the Internet Archive (instructions below).

**If you are seeing a lot of similar patterned links and there are more links than you can easily capture in an hour or so, then you might consider flagging the site as "Needs Scraping" and then we can try to scrape the links programmatically.** But this is for mostly exceptional cases, so do your best and also know that you can first submit a subset of links to the wayback machine and then go back to add additional links as you find them.

## Internet Archive Google Sheets Service

The Internet Archive has a [Google Sheets service](https://archive.org/services/wayback-gsheets/) where you can submit a Google Sheet with the first column full of URLs (just the URLs), and it'll work through archiving them all.

Some of the other individual task tutorials for SUCHO involve building spreadsheets to submit to the Internet Archive in this way.

- [Log into your Internet Archive account](https://archive.org/account/login) (or [create one](https://archive.org/account/signup))
- Go to the [Wayback-GSheets service page](https://archive.org/services/wayback-gsheets/) and log in with whatever Google account you used to create your spreadsheet. Grant it the necessary permissions.
  - If the sheet is 'view only' for you, request edit-access or make a copy of it. This will allow Internet Archive to log import-errors to the sheet via your Google account.
- Once you've authenticated, you'll see 3 large green buttons: *Archive URLs*, *Check if URLs are archived in the Wayback Machine*, and *Check if URLs are available in the Live Web*. We'll be using **Archive URLs**, so click that button.
- Underneath the gray box at the top of the page, there's a field for *Google Spreadsheet URL*. Paste the URL of your spreadsheet with links in that box.
- Check the "Capture outlinks" box
- You can keep the "Capture only if not archived within 6 hours" option enabled
- You can also keep the "Delay the availability of new captures for ~10 hours" option on too. (**Note**: in practice, under the current load, it can take multiple days for new captures to show up, so don't worry if things you've captured aren't there the next day.)
- Hit the green "Archive" button
- You'll get an email that the Internet Archive is processing the spreadsheet, and you can watch the progress in the gray box. You'll get an email when it's done. The spreadsheet will also be updated with info about the status of all the links and what was captured.
- **Do not resubmit the whole sheet** after it's done. If there are links that have errors *other than 200 codes* (which means the page got captured, but the index may not have been created), copy them into a new tab, make that tab the first tab in the sheet, and then resubmit with just the things that weren't captured.
- Also if you are using tabs in your Google sheets, the Wayback-GSheets service will only process the first tab so make sure to organize accordingly.
