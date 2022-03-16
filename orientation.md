---
layout: default
permalink: orientation
title: Orientation
---

# SUCHO Orientation

## I'm new here, how do I help?

Welcome, and thank you for volunteering! It's been amazing to see so many people come together to help archive Ukrainian cultural heritage sites.

If you haven't filled out the [volunteer form](https://docs.google.com/forms/d/e/1FAIpQLSc6KbhtEOI8zKsQmKT_waE1XlYEF1E6t-HzJ7Gc1EBfMvMg_A/viewform), that's the place to start. We go through the responses to that form a couple times a day and send people a link to our Slack, where we're organizing everything.

## Once you're in Slack

We're posting relevant information for newcomers in the #orientation channel, including things like times for upcoming Zoom sessions. You can drop by anytime in the Zoom session window to chat with an organizer who can help you get started, or troubleshoot tasks that you're working on. Head to that channel first once you join Slack.

### Look at the pinned posts on the top of each channel

Our latest updates and handy tips and tricks will be pinned at the top of each channel. For example, Orientation's pins include:

-   A list of key folks to know and our handles for getting in touch with us
-   A Google Doc with recordings of past trainings and links to upcoming events
-   Links to the working spreadsheet and the tutorials collection

Other channels will have their own pin collections, and the pins get updated more frequently than these web pages do. If you're confused about anything, just ask in the channel and we'll give you the latest info we have.

### How we've organized Slack

We've organized our Slack channels primarily around the tasks people are doing:

-   #browsertrix is for people who are relatively tech-comfortable, and involves running the WebCrawler Browsertrix Docker container. If that doesn't resonate with you, we have many other options!

-   #linkcollection is for people working on finding new links to add to our workflow by submitting them via the [URL form](https://docs.google.com/forms/d/e/1FAIpQLSffa64-l6qXqEumAcf38OEOrTFeYZEmF531PNv9ZgzNFbcgxQ/viewform) or in bulk, directly to our working spreadsheet.

-   #manualwebrecorder is for people using the [Fast ArchiveWeb interface](https://fast.archiveweb.page/#https://example.com/) or [WebRecorder browser plugin](https://www.sucho.org/webrecorder-plugin-instructions) to manually create web archives by navigating sites (especially complex sites w/ lots of javascript or human interaction). If you can browse a website, you can handle these tasks!

-   #waybackmachine is for people checking that websites are well captured by the Internet Archive's Wayback Machine and submitting links (including large sets of links) to the Wayback Machine for archiving. You can do this manually or try to automate it with code from the #scraping channel.

-   #internetarchive is for people who are submitting files to the [SUCHO collection on the Internet Archive](https://archive.org/details/sucho). Many of those files are the result of people working in the #scraping channel.

-   #scraping is for people writing their own custom scrapers using code, often as a way to speed up tasks in other channels (like #waybackmachine) or to capture things that automated crawlers like Browsertrix or the Wayback Machine can't capture (library catalogs, digital archives, etc.)

-   #translation is full of people who can read Russian and/or Ukrainian. If you're confused about how to navigate a site you're working on, or what something means, head over there and ask.

-   #qualitycontrol is for people who can more or less read Ukrainian and/or Russian, to check on the web archives we've created and make sure they're actually complete.

-   #metadata is for people who are curating metadata for items uploaded into the [SUCHO collection on the Internet Archive](https://archive.org/details/sucho)

-   #wikimedia is for people working with WikiData: getting information from them, and sending updated information back.

There are other areas of Slack that don't have to do with tasks:

-   #mentors is if you're looking for a person who can help guide you to a task to get started with. The response time depends on how many people are online at a given time.

-   #pets is for sharing pictures of animals!

-   #random is where we share duck pictures, music playlists, funny jokes, and other such things.

-   #academic-outreach is where we're discussing potential academic publications (e.g. handbook of emergency web archiving) that document the work of the project and the challenges we've encountered


## Choosing tasks

Our work is coordinated through an enormous Google Sheet with many tabs:

![The SUCHO spreadsheet with tabs highlighted](/assets/images/sucho-tabs.png)

If you look at the bottom of that screen shot, there are Browsertrix, Manual WebRecorder, and InternetArchive tabs visible; we have about 12 other tabs coordinating other sections of the work. 

When we talk about doing things in "The Spreadsheet," this is usually the spreadsheet we mean. (However, the Metadata team has a different spreadsheet for its team's work,, and Erica is maintaining a Situation Monitoring spreadsheet with information about specific locations of high interest.)

### Deciding what to do

See the "Low Tech Helping" and "High Tech Helping" sections (below) if you're looking for a type of task to focus on.

You can also ask in #general and/or #situation-monitoring if you want to focus on locations under active bombardment or with identified damage.

Once you've found your area of focus, claiming and completing tasks will be handled in the spreadsheet.

### Low tech helping

We have several teams working on projects that mostly need a web browser and enthusiasm (you don't even need to read Cyrillic for most of these).

* **Link collection**: Teammates will have edit access to our working spreadsheet. You should add newly discovered links to the Browsertrix tab first, because it will automatically check for duplicates found elsewhere. If it's not a duplicate (i.e. doesn't turn magenta), please also add it to the Internet Archive tab, because there are two capture processes running at the same time for different purposes.
* **Internet Archive**: Newly submitted links get added to the InternetArchive tab of our working sheet (along with Browsertrix, described below). Volunteers make sure that the sites are thoroughly captured by the Wayback Machine, including sub-pages.
* **Manual WebRecorder**: While many of our sites can be captured by the automated system called Browsertrix, some of them (and some special features such as virtual tours within a site) need a human being to navigate the site while recording it. Join the Manual WebRecorder team if you like browsing museum and library websites! Visit the [Manual WebRecorder tutorial](/webrecorder-browser-plugin-instructions) for more process specifics.
* **Metadata (great for cataloging librarians)**: Some volunteers have uploaded files (e.g. PDFs, images, etc.) from Ukrainian repositories to the Internet Archive. The Metadata group fills out a separate metadata spreadsheet with metadata about those items based on information in our working spreadsheet. This information is periodically uploaded to the Intenet Archive. Visit the [Metadata tutorial](https://docs.google.com/document/d/1qpax1HQmWOVXqbA9NTCU4WBZNWKfLPhUTqxs7s94Jas/edit#) for more process specifics.

### High tech helping

* **Browsertrix**: Newly submitted links go to the Browsertrix tab of our working spreadsheet (along with InternetArchive). Browsertrix is an automated web crawler using the open-source Webrecorder software, and volunteers run it on their laptops, on servers they manage, or even on Raspberry Pi devices! You need to be a little bit familiar with the command line to run Browsertrix, but we have a step-by-step tutorial for how to get it set up. Visit the [Browsertrix tutorial](/browsertrix) for more process specifics.
* **Scraping**: Some sites, like library catalogs and repositories, don't have URLs that an automated web crawler can easily follow, so the scraping group writes custom code to capture the contents of those sites. Intermediate-to-advanced coding skills (preferably Python) are needed to help with this group. There are also special sub-groups of scraping with channels on Slack, like #repository-talk and #irbis. If you're not sure how to approach the site, check in the channel for the type of site you're working with, or (if you're not sure) in Browsertrix. (Most of our programmers hang out there.)
* **Dataviz**: This group in the #inventory-dataviz channel is working on visualizing what SUCHO has captured so far. Intermediate-to-advanced coding skills are needed.

### Can you read Ukrainian?

In addition to the Link Collection and Metadata volunteer groups above, there are a couple of teams where reading Ukrainian is a vital prerequisite:

* **Quality control**: After we've backed up a site using tools such as Browsertrix or Manual WebRecorder, we need people with Ukrainian language skills to browse around our copies of the site and make sure that our backups are working as intended.
* **Translation**: We're doing direct outreach to some sites to see if we can contact their administrators, and help with translation of correspondence and news materials is always helpful.


### Claiming a task

1.  Go to the tab that corresponds to the area you're working in (for example, Browsertrix or Internet Archive or Link Collection).

2.  Find a row that has a URL but doesn't have a Status or Claimed By in it. (Often these will be toward the bottom of the sheet. You could also re-try things that were Skipped or Failed -- some sites have been coming back online!)

3.  Put your name down in the "claimed by" column when you decide to work on a task.

4.  Change the status to "in progress". We try to break up most tasks into "bite-sized pieces" so people can do just a little.

    (If you have a larger amount of time available to work on this, feel free to claim multiple tasks. If you don't get to them, you can remove your name and change the status back to blank.)

### Working on a task

1.  When you've claimed a URL, you'll probably want to put it into a safety checker like <https://sitecheck.sucuri.net/>to make sure it hasn't been infested with malware. (You may also want to protect your computer and browser with the steps mentioned in the [Safety First](https://www.sucho.org/security) page.)

2.  Visit the [Tutorials Page](https://www.sucho.org/tutorials) for more specifics on how the Internet Archive, Browsertrix, and other workflows go in more detail.

3.  If you've got questions while working on a task, try asking in the corresponding channel (e.g. #manualwebrecorder for tasks in the Manual WebRecorder tab of the sheet).

### Completing a task
If you're not sure what to do with the data when you're done with the task, and there aren't more specific directions in the instructions for the task, check out our [guide to data upload](/data-upload). Be sure to mark the task as done in the sheet when it's completed, and fill in any info needed there (e.g. links to the spreadsheets you created full of Internet Archive links)
