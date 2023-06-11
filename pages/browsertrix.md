---
layout: default
permalink: browsertrix
title: Browsertrix
---

# Intro

This tutorial will teach you how to run Browsertrix locally on your computer to archive a site to your harddrive. This process requires intermediate-skills using the command line and Docker. If you would prefer to run Browsertrix through a user-interface, see our dedicated tutorial on [Browsertrix-Cloud](https://www.sucho.org/browsertrix-cloud). 

The below tutorial will walk you through the process of setting up and running Browsertrix. The main commands you will regularly use to run processes through the command line are:

Installation: `docker pull webrecorder/browsertrix-crawler`

Crawling: `docker run -v $PWD/crawl-config.yaml:/app/crawl-config.yaml -v $PWD/crawls:/crawls/ webrecorder/browsertrix-crawler crawl --config /app/crawl-config.yaml --generateWACZ`

Upload that .wacz file to our [WACZ uploads form](https://forms.gle/N18MxWgoHtPB2xpz8). 

Please read the full tutorial below. **If you have questions**, don't hesitate to ask on the #browsertrix Slack channel. This sort of work often requires help for troubleshooting.

## Web Crawling 

Web crawling is the process of systematically browsing a website or set of websites. Browsertrix is the tool SUCHO is using to crawl entire sites and copy all their contents for the purposes of emulation and replay. Most websites can be preserved in their entirety using this tool.

However, some websites have content (e.g. interactive 3D models) that won't capture well with Browsertrix; in these cases, we will send those parts of the websites over to be scraped/captured by other tools. 

Browsertrix is a little complicated to set up; these instructions are written to help onboard people who are "medium-technical." Even if you have little prior coding experience, this tutorial should make it possible for you to crawl and preserve a website. 

By the end of a crawl, you will have generated a zipped file of a a series of [Web ARChive (WARC) files](https://en.wikipedia.org/wiki/Web_ARChive). This final zipped file produced by Browsertrix is known as a .wacz file (short for [Web Archive Collection Zipped](https://webrecorder.net/2021/01/18/wacz-format-1-0.html)). 

### Browsertrix
[Browsertrix](https://github.com/webrecorder/browsertrix-crawler) is a simplified browser and crawling system that can create web archive files for entire sites. It's distributed as a *Docker container*. 

A [Docker](https://www.docker.com/) container basically packages up system configuration in a way that makes a software program easy to share and run on different computers and servers.

## Initial Set Up

For a 20-minute video overview of installing Docker and setting up Browsertrix, watch this [introduction to running Browsertrix locally](https://stanford.zoom.us/rec/share/lK7V534b7hoGfYQiH_Idhotpr0FAH-azo6EVfGvbq56HCn79JX3GtotEtiWOasFq.7BzPPj_PLzZmPbYx?startTime=1646784320000).

### Installing Docker

The first step is to [download and install Docker](https://docs.docker.com/get-docker/). That link has instructions and download information for Mac, Windows, and Linux. 

*For Macs*: there are different links for Mac with Intel vs. Apple chip; most Macs have an Intel chip. For installation on Mac, you will need to ok security warnings confirming you intended to open and install the software, and you may also need to give Docker privileged access to install networking components.

*For Windows*: Installation should be straightforward. If you run into trouble with the next steps, try restarting your computer after installation is complete.

Once Docker is installed, as it loads you should see a sort of whale-with-flickering-boxes in your computer's toolbar menu. This is visible on the top of the screen on Mac, bottom of the screen on Windows. You can minimize or close the Docker Desktop window, but you should still see a whale-with-boxes icon (a ceteceous container ship). 

### Launching the command line
Now that Docker is running, we can set up the web crawler from the command line.

*For Macs*: go to *Applications > Utilities > Terminal*.

*For Windows*: search for *cmd*, and the Command Prompt app should appear as the best match.

### Getting the Docker image for Browsertrix

To download and set up Browsertrix using Docker, in your command line, type or paste this:
```
docker pull webrecorder/browsertrix-crawler
```

**Note**: If this command throws an error, you might not have administrative permissions. Try the above command again, but put `sudo` at the front, so the command would be: `sudo docker pull webrecorder/browsertrix-crawler`

Now that you've installed Docker and configured the Docker image, you shouldn't need to redo these first setup steps again. 

## Picking a website from the spreadsheet
Before you click on a link in the spreadsheet and open it in your browser, please read our [security guidelines](https://www.sucho.org/security). To be on the safe side, you may want to backup your personal files stored on your computer.

Go to the Browsertrix tab of the SUCHO working spreadsheet and pick a site to work on that no one has claimed yet. To claim the site, on that row of the spreadsheet, add your name to the 'Claimed By' column, and update the 'Status' column to 'in progress.' 

To avoid downloading malware, the first thing you should do when you find a URL to crawl is run a security check by copying the link into this [security checker](https://sitecheck.sucuri.net/). See the [security guidelines](https://www.sucho.org/security) for more information on this process. Generally speaking, a "Medium" risk shouldn't pose a threat to you if the security check verifies that no "malware" or "injected spam" is detectable on the site.

Prioritize sites with links ending in `.ua`. Check where they are hosted and focus on sites in Ukraine and environs using [Hosting Checker](https://hostingchecker.com) or [IP-Lookup](https://www.iplocation.net/ip-lookup). Just because a site shows it is hosted in San Francisco on Cloudflare doesn't mean it's not hosted Ukraine, just that Cloudflare's CDN is serving the site through a reverse proxy cache. 

Besides verifying its server location, you should double check the site is still live by loading the 'Collection Url' in your browser. 

## Configuring the YAML file 
A YAML file is a plain-text file for storing configuration information about how a programming script will run. YAML files are very picky about spaces, how many, and where they're located. Each time you conduct a crawl, you can edit a yaml file to configure the crawl for a website and its subdomains.

You can download an [example `crawl-config.yaml` file here](crawl-config.yaml), and modify it using a plain-text editor. (If you don't have a plain-text editor already installed on your computer, download and install [Atom](https://atom.io/) for Mac or Windows, and use that to open and edit the example YAML file.)

The `crawl-config.yaml` file should look as follows (with `collection`, `url`, and `include` changed to match each website): 

```
collection: "sgiaz-uamuseum-com"
workers: 8
saveState: always
seeds:
  - url: http://sgiaz.uamuseum.com/
    scopeType: "domain"
```

Here's the fields you should modify each time:

* `collection:` this should be basically the URL that you scrape, but with hyphens instead of periods in the URL. So *http://archangel.kiev.ua* becomes `collection: archangel-kiev-ua`
* `url:` this is just the base URL in the SUCHO spreadsheet for the URL you're scraping

Save the YAML file as `crawl-config.yaml` somewhere easy to navigate to on your computer -- on a Mac, the Documents folder is a good one. You will need to be able to change your directory using the command line to where your *crawl-config.yaml* file is saved on your computer to run the Docker command from that directory when you crawl the site. 

For examples of `crawl-config.yaml` files used for the SUCHO project, see our separate Github repository, [browsertrix-yaml-examples](https://github.com/sucho-archiving/browsertrix-yaml-examples).

## Crawling the website
Open up the command line again, if you closed it before. 

*For Mac*: this will by default put you in your home directory (i.e. /Users/your-user-name). If you saved your *crawl-config.yaml* in the Documents folder, type `cd Documents`, and your command line will put you in the Documents folder. (If you put it somewhere else, you can put in that path after the `cd`, e.g. `cd Documents/some-subfolder/another-subfolder`).

Once you're in the same location as your *crawl-config.yaml*, paste this command into the Mac terminal and press enter to start the crawling:
```
docker run -v $PWD/crawl-config.yaml:/app/crawl-config.yaml -v $PWD/crawls:/crawls/ webrecorder/browsertrix-crawler crawl --config /app/crawl-config.yaml --generateWACZ
```
*For Windows*: after navigating to the right directory in the command prompt using `cd`, type the following command:
`docker run -v %cd%/crawl-config.yaml:/app/crawl-config.yaml -v %cd%/crawls:/crawls/ webrecorder/browsertrix-crawler crawl --config /app/crawl-config.yaml --generateWACZ`

### Troubleshooting the crawl command
You may have to use 'sudo' at the start of this command. 

If you encounter errors relating to absolute paths, directories, or other errors, you may need to double check where you placed your config file, and how you are directing browsertrix to find it. 

Some users on both Macs and Windows have had problems with $PWD and %cd%. Try putting in the full system path to the crawl-config.yaml. To find the absolute path for your .yaml file, locate the crawl-config.yaml file and copy the directory address in the folder window.

### Waiting and timeouts
Depending on the size of the site, the crawl could take anywhere from a couple minutes to 10+ hours. If you run out of space on your computer, or if browerstrix fails, someone with a server or access to the cluster can try running. If you run into problems, ask the Slack #Browsertrix channel.

If webpages fail to load and timeout, you may need to manually set browsertrix to a longer timeout limit by adding to the end of your command `--timeout 300`. Timeouts are tricky, so if you can't get it working, make a comment and move on to another open item. 

Just because during a crawl you receive error messages relating to timeouts, it dooesn't always mean the URL couldn't be captured (it may have been a single resource on the page, such as an image from a non-existent third party site). View the final .wacz file in ReplayWeb to see what failed about any given page.

If the crawl gets interrupted, Browsertrix should be able pick up where it left off if you run a slightly different crawl command. See the Exclusions section in Common Problems for more info.

If the crawl consistently fails for any number of reasons, change the status to Failed and add notes about the errors and problems in the Comments field. Another person can try recrawling the site later with more complex parameters, or we may turn it over to manual webrecording tools. 

## Final Step: Uploading the WACZ file
The directory that has your *crawl-config.yaml* file will generate a *crawls* directory the first time you run the command to crawl a site. To find the WACZ file containg the archive of the website, open the  *crawls* folder, then the *collections* folder. Inside *collections*, you should see a folder for each collection you've crawled. Inside the collection folder is a .wacz file.

Verify the website was captured by uploading the .wacz file to the Webrecorder's [ReplayWeb.Page](https://replayweb.page/). Once the archival file is loaded into ReplayWeb.page, it is served locally on your machine, and you can navigate the website. Focus on verifying that the main subcomponents of the site were saved, especially pages listed in the navbar. Many links on the site may be external to the domain you preserved. 

Upload that .wacz file to our [WACZ uploads form](https://forms.gle/N18MxWgoHtPB2xpz8). Make sure to change the Status to "Done" and add info to the Notes field about any errors you encountered and any concerns you have aboaut the quality of the .wacz file. The Quality Control team can verify your lingering questions. 

Once you've submitted the Google Form, your crawl is complete! Thank you for your work.  Please mark in the spreadsheet the row's status as "Done," and continue on to the next item.

# Common Problems

## Troubleshooting uploads

See our [data upload](https://www.sucho.org/data-upload) tutorial for further info on this process.

### For uploads of less than 10 GB
If your Google Drive account doesn't have enough free space for the uploaded file, you will get a "Server Rejected" error message.  First, see if you can delete any previously submitted wacz files from your drive.  If you can, this may free up enough space.  If the upload still fails, try to upload it to your Drive first, and then use the "add from google drive" option in the form.  If that still doesn't work, see the section for "For uploads greater than 10GB".

### For uploads greater than 10GB
For WACZ files that are larger than 10GB, please follow these [instructions to upload with the AWS tool](/wacz-upload-aws) and send a message on the #Browsertrix Slack channel to get access to AWS

## Recreating the WACZ file

Sometimes creation of the WACZ file may fail with an error message or the crawl may be interrupted unexpectedly and the files not generated.
If this is the case, they can be created manually as long as the `pages/pages.jsonl` is present.

There are two ways you can do this. First, try using the following commanmd:

`docker run -v $PWD/crawls:/crawls/ webrecorder/browsertrix-crawler wacz create --split-seeds -f ./crawls/collections/<coll>/archive/*.warc.gz -p ./crawls/collections/<coll>/pages/pages.jsonl`

If that won't work, you could try installying Python, and then installing pip3 and wacz  by running
```
sudo apt install python3-pip && pip install wacz
```
Then you can generate the WACZ by running
```
wacz create --split-seeds -f ./crawls/collections/<coll>/archive/*.warc.gz -p ./crawls/collections/<coll>/pages/pages.jsonl
```
If this fails (it may do so for larger archives), contact Admin on the #Browsertrix slack channel for sftp credentials and upload the entire collections/<coll> folder to a suitably named desination folder with the following command

  `rsync -aRv --rsh='ssh -p<port>' crawls/collections/<coll> <username>@<server_address>:./<coll>`
  
Replace the <port>, <username> and <server_address> with the credentails Admin will provide, and <coll>, <coll.wacz> sections with the file address of the file you'd like to upload. Enter your provided password when prompted.
  
See our tutorial on [uploading folders to AWS](https://www.sucho.org/folder-upload-aws) for more information and options.
 
## Exclusions for crawls that won't finish

If you have a crawl that seems to not be finishing and appears to be stuck in a loop, you can interrupt it, and add an exclusion regular expression, and then continue! The following also works if your crawl gets interrupted unintentionally. It's a bit cumbersome, but you can:

1. Interrupt the crawl with ctrl+c (except probably windows)
2. This should interrupt the crawl and save the state to a yaml file and it should print "Saving crawl state to: /crawls/collections..."
3. Open that yaml file in a text editor ./crawls/collections/...
4. Add an `exclude: <regex>` field, can be at the beginning in the root of the yaml file. See below for examples of how to set up the regex.
5. Restart the crawl by running it with `--config /crawls/collections/...` pointing to the edited yaml file (it'll be in the crawls volume so will be accessible from /crawls)
6. The restarted crawl will apply the new exclusion rules to the crawl and filter out any urls in the crawl state, so hopefully now your crawl can finish.
You can do this as many times as needed to update the exclusion rules.

*Note*: To interrupt a crawl in Windows, if ctrl+C doesn't work, try ctrl+Break may work, or try `docker ps` and then `docker kill -s SIGINT <container ID>`. 
  
#### Exclusion examples and tips

* To exclude everything that comes after /directory/ (e.g. `/directory/thing1`, `directory/thing2`), you can use: `https?://www.site.ua/directory/.*`
* If you have a list of paths you want to exclude you can add one regex per path, or you can combine them into one regex; the former is likely to be cleaner, easier to follow, and less error-prone, e.g.:

```
 - url: https://example.site.com
    scopeType: domain
    exclude:
      - https?://example.site.com/path1/.*
      - https?://example.site.com/path2/.*
      - https?://example.site.com/path3/.*`
```
 
## Docker optimization

If you installed Browsertrix a while ago, you may want to update your version with the following command:
`docker pull webrecorder/browsertrix-crawler:latest`
  
If you want to speed up Docker, you can look at advanced options to change how it uses computing resources. On Mac, go to 'Settings,' 'Resources,' and increase CPU usage, Memory, and other features. On Windows, these edits need to be made to the .wslconfig file (see their [docs](https://docs.microsoft.com/en-us/windows/wsl/wsl-config)).
  
## Scraping Failed Pages

For advanced users, if specific pages fail during your crawl, you can use this [script](https://github.com/ZoeLeBlanc/sucho_scripts) to take the failed links from your crawl, check if they exist in the Wayback Machine, and if not, you can either save it to a csv and upload it to Google Sheets to send to the Wayback service, or save it directly to the Wayback Machine. 
