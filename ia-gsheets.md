---
layout: default
permalink: ia-gsheets
---

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
- You'll get an email that the Internet Archive is processing the spreadsheet, and you can watch the progress in the gray box. You'll get an email when it's done.
- You may need to submit the sheet again after it's done; often things that time out or aren't available can get picked up on a second archiving run (and it won't re-run things it just did, because of that 'Capture only if not archived within 6 hours' option).