---
layout: default
permalink: browsertrix
title: Browsertrix
---

# Browsertrix

Browsertrix is the tool we're using first to crawl entire sites and all their contents. Some sites have content (e.g. interactive 3D models) that don't capture well with Browsertrix, which is when we send those parts of the sites over to be captured by other tools. It's currently our biggest bottleneck.

Browsertrix is a little complicated to set up, but these instructions are written to help people who are "medium-technical" (not necessarily people who code, but who aren't afraid of installing and messing around with stuff) get started.

## About Browsertrix
[Browsertrix](https://github.com/webrecorder/browsertrix-crawler) is a simplified browser and crawling system that can create web archive files for entire sites. It's distributed as a *Docker container*. A Docker container basically packages up system configuration in a way that makes it easy to share and run on different computers and servers.

## Installing Docker

The first step is to [download and install Docker](https://docs.docker.com/get-docker/). That link has instructions and download information for Mac, Windows, and Linux. (Tip: here are different links for Mac with Intel vs. Apple chip; most Macs have an Intel chip.)

On Macs, you will need to confirm that yes, really, you did mean to open it, and may also need to give it privileged access to install networking components.

Check the checkbox to accept the terms of use agreement. You might see a sort of whale-with-flickering-boxes appear in your computer's toolbar menu (on the top of the screen on Mac, bottom of the screen on Windows) as Docker Desktop loads. You can close the Docker Desktop window (what we'll be doing is working with the command line) but you should still see a whale-with-boxes.

## Launching the command line
On a Mac, go to *Applications > Utilities > Terminal*.

On Windows, search for *cmd*, and the Command Prompt app should appear as the best match.

## Getting the Docker image for Browsertrix

In your command line, type or paste this:
`docker pull webrecorder/browsertrix-crawler`

This downloads and sets up Browsertrix using Docker.

*Note*: If this command throws an error, it is probably the case that you don't have administrative permissions. Try the above command again, but put 'sudo' at the front, so the command would be: 'sudo docker pull webrecorder/browsertrix-crawler'

## Creating a configuration YAML file
A YAML file is just a plain-text file for storing configuration and such. YAML files are very picky about spaces, how many, and where they're located. You can download an [example YAML file here](crawl-config.yaml), and modify it using a plain-text editor. (If you don't have a plain-text editor already installed on your computer, download and install [Atom](https://atom.io/) for Mac or Windows, and use that to open and edit the example YAML file.)

Here's the things you should modify:

* `collection:` this should be basically the URL that you scrape, but with hyphens instead of periods in the URL. So *http://archangel.kiev.ua* becomes `collection: archangel-kiev-ua`
* `url:` this is just the base URL in the SUCHO spreadsheet for the URL you're scraping
* `include:` this is a little tricky it's the URL with some complicated syntax to try to capture subdomains. It starts with `.*\.` and then the first part of your URL. Instead of a dot between the parts of your URL path, it should be `\.` So *http://archangel.kiev.ua* becomes `include: .*\.archangel\.kiev\.ua/`

Save the YAML file as *crawl-config.yaml* somewhere easy to navigate to on your computer -- on a Mac, the Documents folder is a good one. You need to be able to change your directory using the command line to where your *crawl-config.yaml* file is saved on your computer to run the Docker command to crawl the site.

## Starting to crawl the site
Open up a command line again, if you closed it before. 

On a Mac, this will by default put you in your home directory (i.e. /Users/your-user-name). If you saved your *crawl-config.yaml* in the Documents folder, type `cd Documents`, and your command line will put you in the Documents folder. (If you put it somewhere else, you can put in that path after the `cd`, e.g. `cd Documents/some-subfolder/another-subfolder`).

Once you're in the same location as your *crawl-config.yaml*, paste this command into the command line and press enter to start the crawling:

`docker run -v $PWD/crawl-config.yaml:/app/crawl-config.yaml -v $PWD/crawls:/crawls/ webrecorder/browsertrix-crawler crawl --config /app/crawl-config.yaml --generateWACZ`

*Note*: You may have to use 'sudo' at the start of this command. If you are on Windows, you should change "$PWD" to the absolute path. To find the absolute path for your yaml file, locate the crawl-config.yaml file and copy the directory address in the folder window.

## Waiting
Depending on the size of the site, it could take anywhere from a couple minutes to 10+ hours. If you run out of space on your computer, contact @Seb on the SUCHO Slack and he'll use one of the big servers on it.

## Uploading the WACZ file
The directory that has your *crawl-config.yaml* file will get a *crawls* directory the first time you run the command to crawl a site. To find the WACZ (archive) file, open that *crawls* folder, then the *collections* folder. Inside *collections*, you should see a folder for each of the sites you've crawled. Inside that folder is a .wacz file.

Upload that .wacz file along with associated metadata to our [WACZ uploads form](https://forms.gle/N18MxWgoHtPB2xpz8).
