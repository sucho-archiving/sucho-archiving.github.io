---
layout: default
permalink: browsertrix-cloud
title: Browsertrix Cloud
---

## Overview

Browsertrix Cloud enables you to run automated web crawls using SUCHO's cloud servers, without having to install Docker and use the command line. 

The [command-line version of Browsertrix](https://www.sucho.org/browsertrix) gives you more control over things like path exclusions (e.g. to avoid crawling through lots of empty past-event calendar pages) and timeout rules (which help with very slow sites), so if you're comfortable working with the command line, we encourage you to use that route. Otherwise, read on for how to run automated crawls on Browsertrix Cloud!

## Sign up for an account
(Ilya explains this)

## Log in
Go to [crawls.sucho.org](https://crawls.sucho.org) and log in with the credentials you used to sign up.

## Archives
Once you've logged in, you'll see *SUCHO Shared Archive's Archive* and *Your-Name's Archive*. Click on "SSSSSSS"

This will take you to a page with tabs at the top for "Crawls" (where you can see currently active crawls) and "Crawl Templates". Click on "Crawl Templates", which is where you can configure the setup for capturing a website.

## Configuring crawl templates
Click the big button that reads *Create New Crawl Template*. This will take you to a form you'll need to fill out. 

* **Basic settings**: The name should be the base URL of the website you're working on, with periods replaced by hyphens. So if you're working on http://dcvisu.sikorsky.kiev.ua, the name should be `dcvisu-sikorsky-kiev-ua`. This name will be used for the web archive file that gets created at the end, so using this convention to name your crawl template will make it easier for us to match it up with site metadata for QC.
* **Crawl settings**
  * **Crawl scale**: This setting determines how many browsers will be used to simultaneously capture different pages on the site. Start with the default "Standard" (which launches 8 simultaneous browsers), but if the site is responding quickly and appears to have many pages, you can change this setting even as the crawl is running. "Big" launches 16 simultaneous browsers, and "Bigger" launches 24.
  * **Seed URLs**: This should be the base URL of the site you want to capture (e.g. `http://dcvisu.sikorsky.kiev.ua`)
  * **Scope type**: We usually recommend "Domain" for this setting, which will also capture any subdomains (e.g. http://thing1.site.ua and http://thing2.site.ua along with http://site.ua)
  * **Do not check** the box for external links -- Browsertrix Cloud will crawl the pages of the site just fine without it
  * **Page limit** should stay with the default "unlimited"
* **Crawl schedule**: use the default settings (not recurring, run imediately on save)

Once you've filled out this form, hit the big blue *Save Crawl Template* button at the bottom.

## Monitoring the crawl
Crawls take 1-2 minutes to start, and you'll be able to see their status on the Archives page. You can click on a crawl to look at the details. On the left-hand tabs, you can click "View Crawl" to watch the web browser(s) and what they're currently capturing.

SCREENSHOT

## Adding more crawl templates
We recommend that you have no more than 10 crawl templates running at a given time, and that you keep an eye on them to make sure they're successfully running. You can add more crawl templates as crawls complete.

WACZ files (the web archives produced through this workflow) are already automatically stored on SUCHO's servers, so you don't need to upload anything at the end.

## Troubleshooting crawl templates
If a crawl template completes with only 1 page, something went wrong in the crawl template configuration. A common error is using http instead of https, or vice-versa. You can try it again, or otherwise, mark it as incomplete in the SUCHO working spreadsheet and someone else will try it.
