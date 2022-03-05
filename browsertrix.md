---
layout: default
permalink: browsertrix
title: Browsertrix
---

## Web Crawling 

Web crawling is the process of systematically browsing a website or set of websites. Browsertrix is the tool SUCHO is using to crawl entire sites and copy all their contents for the purposes of emulation. Most websites can be preserved in their entirety using this tool.

However, some websites have content (e.g. interactive 3D models) that won't capture well with Browsertrix; in these cases, we will send those parts of the websites over to be scraped/captured by other tools. 

Browsertrix is a little complicated to set up, so it has become a bottleneck for SUCHO. These instructions are written to help onboard people who are "medium-technical" (not necessarily people who code, but who aren't afraid of installing and messing around with stuff). Even if you have little prior coding experience, this tutorial should make it possible for you to crawl and preserve a website. 

**If you have questions**, don't hesitate to ask on the #browsertrix Slack channel. This sort of work often requires help for troubleshooting.

## Browsertrix
[Browsertrix](https://github.com/webrecorder/browsertrix-crawler) is a simplified browser and crawling system that can create web archive files for entire sites. It's distributed as a *Docker container*. 

A [Docker](https://www.docker.com/) container basically packages up system configuration in a way that makes a software program easy to share and run on different computers and servers.

## Installing Docker

The first step is to [download and install Docker](https://docs.docker.com/get-docker/). That link has instructions and download information for Mac, Windows, and Linux. 

*For Macs*: there are different links for Mac with Intel vs. Apple chip; most Macs have an Intel chip. For installation on Mac, you will need to ok security warnings confirming you intended to open and install the software, and you may also need to give Docker privileged access to install networking components.

*For Windows*: Installation should be pretty straightforward after downloading the executable file. If you run into trouble with the next steps, try restarting your computer after installation is complete.

Once Docker is installed, as it loads you should see a sort of whale-with-flickering-boxes in your computer's toolbar menu. This is visible on the top of the screen on Mac, bottom of the screen on Windows. You can minimize or close the Docker Desktop window, but you should still see a whale-with-boxes icon (a cetecean shipping container). 

Now that Docker is running, we can perform the web crawl from the command line.

## Launching the command line
*For Macs*: go to *Applications > Utilities > Terminal*.

*For Windows*: search for *cmd*, and the Command Prompt app should appear as the best match.

## Getting the Docker image for Browsertrix

In your command line, type or paste this:
`docker pull webrecorder/browsertrix-crawler`

This command downloads and sets up Browsertrix using Docker.

**Note**: If this command throws an error, you might not have administrative permissions. Try the above command again, but put `sudo` at the front, so the command would be: `sudo docker pull webrecorder/browsertrix-crawler`

## Picking a website from the spreadsheet
Go to the Browsertrix tab of the SUCHO working spreadsheet and pick a site to work on that no one has claimed yet. To claim the site, on that row of the spreadsheet, add your name to the 'Claimed By' column, and update the 'Status' column to 'in progress.' 

Load the 'Collection Url' in your browser to see if it's working; many sites are already going down, so double check before proceeding. 

Next, to avoid downloading malware, please make sure your personal computer is backed up, and run it through a [security check](https://sitecheck.sucuri.net/). If the security check can't run on the site, make a note in the Comments field, and move on to the next item. We can assign other people to run the crawler on dodgier links using stand-alone servers.

## Creating a configuration YAML file
A YAML file is a plain-text file for storing configuration information about how a programming script will run. YAML files are very picky about spaces, how many, and where they're located. 

You can download an [example `crawl-config.yaml` file here](crawl-config.yaml), and modify it using a plain-text editor. (If you don't have a plain-text editor already installed on your computer, download and install [Atom](https://atom.io/) for Mac or Windows, and use that to open and edit the example YAML file.)

The `crawl-config.yaml` file should look as follows (with `collection`, `url`, and `include` changed to match each website): 

```
collection: "archangel-kiev-ua"
workers: 16
saveState: always
seeds:
  - url: http://archangel.kiev.ua/
    include: .*\.archangel\.kiev\.ua/
    scopeType: "host"
```

Here's the things you should modify:

* `collection:` this should be basically the URL that you scrape, but with hyphens instead of periods in the URL. So *http://archangel.kiev.ua* becomes `collection: archangel-kiev-ua`
* `url:` this is just the base URL in the SUCHO spreadsheet for the URL you're scraping
* `include:` this is a little tricky, but all you need to do is reconfigure the collection URL with some new syntax to ensure the webcrawler captures subdomains. It starts with `.*\.` and then the first part of your URL. Instead of a dot between the parts of your URL path, it should be `\.` So *http://archangel.kiev.ua* becomes `include: .*\.archangel\.kiev\.ua/`

Save the YAML file as `crawl-config.yaml` somewhere easy to navigate to on your computer -- on a Mac, the Documents folder is a good one. 

You wil need to be able to change your directory using the command line to where your *crawl-config.yaml* file is saved on your computer to run the Docker command from that directory when you crawl the site.

**Note**: If you encounter errors relating to absolute paths, directories, or other errors, you may need to double check where you placed your config file, and how you are directing browsertrix to find it.

## Starting to crawl the site
Open up the command line again, if you closed it before. 

*For Mac*: this will by default put you in your home directory (i.e. /Users/your-user-name). If you saved your *crawl-config.yaml* in the Documents folder, type `cd Documents`, and your command line will put you in the Documents folder. (If you put it somewhere else, you can put in that path after the `cd`, e.g. `cd Documents/some-subfolder/another-subfolder`).

Once you're in the same location as your *crawl-config.yaml*, paste this command into the Mac terminal and press enter to start the crawling:

`docker run -v $PWD/crawl-config.yaml:/app/crawl-config.yaml -v $PWD/crawls:/crawls/ webrecorder/browsertrix-crawler crawl --config /app/crawl-config.yaml --text --generateWACZ`

*For Windows*: after navigating to the right directory in the command prompt using `cd`, type the following command:
`docker run -v %PWD%/crawl-config.yaml:/app/crawl-config.yaml -v %PWD%/crawls:/crawls/ webrecorder/browsertrix-crawler crawl --config /app/crawl-config.yaml --text --generateWACZ`

**Note**: You may have to use 'sudo' at the start of this command. If you are on Windows, you may be better off using the absolute path. To find the absolute path for your .yaml file, locate the crawl-config.yaml file and copy the directory address in the folder window.

## Waiting
Depending on the size of the site, the crawl could take anywhere from a couple minutes to 10+ hours. If you run out of space on your computer, contact @Seb on the SUCHO Slack and he'll use one of the big servers on it.

## Uploading the WACZ file
The directory that has your *crawl-config.yaml* file will generate a *crawls* directory the first time you run the command to crawl a site. 

To find the WACZ (archive) file, open that *crawls* folder, then the *collections* folder. Inside *collections*, you should see a folder for each of the sites you've crawled. Inside that folder is a .wacz file.

Upload that .wacz file along with associated metadata to our [WACZ uploads form](https://forms.gle/N18MxWgoHtPB2xpz8).

Once you've submitted the Google Form, you're done! Thank you for your work. Please mark the row's status as "Submitted," and continue on to the next item.
