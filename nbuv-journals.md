---
layout: default
permalink: nbuv-journals
title: National Library of Ukraine journals
---
<base target="_blank">

The National Library of Ukraine appears to host a number of journals, sometimes with PDFs, sometimes just a record of their existence. We have a list of 657 of these journals.

We've already submitted the landing page for each journal to the Internet Archive, but that doesn't necessarily mean that the journal articles (when available) are getting archived. These instructions go through how to build a spreadsheet of links to submit to the Internet Archive in order to archive individual issues and articles.

(If you're comfortable running Python scripts and have Selenium set up, you can download [nbuv-journal-links.py](/assets/nbuv-journal-links.py) which makes it easier. Otherwise, read on for the manual process!)

- Create a Google Sheet that you'll use for this task. You only need to put URLs in the first column.
- Claim a few journals on the list [in the spreadsheet](https://docs.google.com/spreadsheets/d/1kGScdU9df7T2QS9RnM_qvciT04Y1tmBiGVH-XD1E4l0/edit#gid=0). 
- For each journal, go to the link and look for the word **НАДХОДЖЕННЯ** in bold (it should be under the journal cover image, if it's there). 
- If you don't find that word, move on to the next journal. If you find that word, you should see one or more years underneath it. 
- Click on each year in turn. This should change the numbers below the year, which appear as a range (e.g. 4-6).
- Click on each range within the year. This should pull up a page full of links. Put the URL of this page in your Internet Archive Google Sheet
- Links that end with a *C.* plus a number (e.g. *C. 70-74*) should be articles. Add all the links to the articles to your Google Sheet.

Once you're done collecting links, run your sheet through the [Internet Archive Google Sheets tool, as described here](/ia-gsheets). Then update the SUCHO spreadsheet (linked in Slack) with the link to the Google Sheet you sent to the Internet Archive.
