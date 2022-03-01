---
layout: default
permalink: molodyivchenyi
---

One of the sites submitted via the collection form is [http://molodyvcheny.in.ua/ua/archive/](http://molodyvcheny.in.ua/ua/archive/). The homepage of this site is captured by the Internet Archive, but individual PDFs in individual issues are much less represented.

- Take the URL for each issue (starting with 2014, we've already done 2013), e.g. [2014 issue 1](https://web.archive.org/web/20200204010048/http://molodyvcheny.in.ua/ua/archive/3/)
- Click on each of the links with a lot of text (the article names). This will toggle down more information, including a PDF link
- Click on the link that appears, labeled "URL". If it loads in the IA window, that's good!
- Links take a predictable form, e.g. for 2014 issue 1 article 2: `http://molodyvcheny.in.ua/files/journal/2014/1/02.pdf`. Sometimes single-digit numbers are prefixed with a 0 (`02`), and sometimes not (`2`).
- Spot check a handful of article numbers (including higher ones, they can sometimes go into the 30's) in the Internet Archive URL bar. If you run into any that are missing, add all the article URLs for that issue to the first column of a Google sheet (e.g. [as done here](https://docs.google.com/spreadsheets/d/1AF0dwTNn3usgzGBOvWEghceMBHi6vPiQRi3zVJSEtnc/edit#gid=1646096099)). If all the articles are showing up, move on to the next issue.
- When you have all the PDF links queued up in a spreadsheet, go to the [Internet Archives Google Sheets service](https://archive.org/services/wayback-gsheets/options?code=4/0AX4XfWgeXS6dRN3DFK-u0SSlIPpyzkeUzu8qHee3jW5-cu4erRHDZNEd8uyq5sAl6OadBw&scope=https://www.googleapis.com/auth/spreadsheets). Authenticate to the Google Drive where your sheet is, then choose the "Archive URLs" button. 
- Paste the URL of your Google sheet into the "Spreadsheet URL" box. Choose "Capture outlinks", and then hit "Archive".
- You may need to submit the sheet multiple times to make sure everything gets archived; some will fail on the first try. You can see which ones failed by looking at your spreadsheet, which 