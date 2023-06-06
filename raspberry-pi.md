---
layout: default
permalink: raspberry-pi
title: Browsertrix on a Raspberry Pi
---


# Browsertrix on a Raspberry Pi

Browsertrix runs on a Pi! If you have a few around you can use them to help scrape sites for SUCHO!

## Here is what you’ll need:

* 1 (or more) raspberry pi – only pi 3s, pi 4s work for this project!
* 1 (or more) raspberry pi power source
* 1 keyboard
* 1 screen & HDMI cable
* Wifi or LAN with internet access of course
* 1 (or more) SD card 64GB+ 
* A PC, Mac or other machine to flash the SD card
* The Raspberry Pi Imager software: [https://www.raspberrypi.com/software/](https://www.raspberrypi.com/software/). 

### You may also need:
* An hdmi adapter for your pi
* A USB adapter for your pi
* A card reader adapter for you PC/MAC

**OPTIONAL:**
Another tool that I use is piTunnel, which gives you access to the pi remotely through a web interface where you can access the command line, it’s not free, though. [https://www.pitunnel.com/](https://www.pitunnel.com/) for those interested. You can also SSH into your machine if you'd like.

## Setting up the Pi:

### Step 1 – flash the SD Card

1.	Insert your SD card into your PC/MAC
2.	Open the Raspberry Pi imager software
3.	Click “choose OS”
4.	Click the second option from the list “Raspberry Pi OS (other)”
5.	Click “Raspberry Pi OS Lite (64-bit)”
6.	Click “Choose storage”
7.	Click the row that shows the SD card that you inserted in the first step of this section
8.	Click “write”
9.	The software will warn you about writing to the card, just double check that you selected your SD card. Make a correction if necessary, otherwise continue
10.	Once the flash is complete you can remove the SD card

### Step 2 – Setup the Pi

#### Powering up

1.	Insert the flashed  SD card into the pi
2.	Attach a keyboard to one of the usb ports
3.	Connect a screen using the HDMI port
4.	Insert the power adapter 
    1.	If your power adapter has a switch, just make sure to flip the switch on

#### Configuring the Pi

1.	When prompted, enter the default username “**pi**”
    1.	Note – this will happen towards the end of the bootup process, but sometimes gets buried in the bootup text. If the bootup seems to have stalled, it may be that the prompt is just mixed in with the bootup text somewhere, to advance, just type “pi” and hit **enter/return**
2.	When prompted, enter the default password “**raspberry**”
3.	You should now have access to the command line. If not, review the steps above and make sure you didn’t miss a step
4.	Enter the following command and press **enter/return** to access the pi settings GUI:

        sudo raspi-config


##### Localization Options

1.	From the raspi-config main menu choose “5 Localisation Options”
2.	Select “L1 Locale”
3.	The locale is set to the default “en_GB.UTF-8 UTF-8” so if this is your locale you can skip the rest of this section, if not you’ll likely want to complete this section.
4.	Select your locale by navigating to proper locale and press the space bar, you can deselect the default with the spacebar as well. I’m in the US, so I’m using “en-US.UTF-8 UTF-8”
5.	Once you have your locale select press **enter/return**
6.	In the next screen select your locale from the list to set it as the default and press **enter/return**. The system will then set the locale – it takes maybe 30 seconds
7.	Go back into “5 Localisation Options”
8.	Select “L2 Timezone”
9.	Select the appropriate geographic area and press **enter/return**
10.	Select the appropriate timezone and press **enter/return**
11.	Go back into “5 Localisation Options”
12.	Select “L3 Keyboard”
13.	Select a keyboard from the list (In the US I always use the default “Generic 105-key PC (intl.)” option)
14.	Select a proper layout.
    1. IMPORTANT steps for US folks: 
    2.	select “other”
    3.	Select “English (US)”
    4.	Select “English (US)” again
    5.	Select “The default for the keyboard layout”
    6.	Select “No Compose Key”
    7.	This will map the US keyboard character set properly, missing this step will make the command line more difficult to use


##### System Options

1.	Navigate to and select “1 System Options”
2.	Select “S3 password”
3.	Press **enter/return** to advance to the password screen when prompted
4.	In the bottom left of the screen you’ll be prompted to enter a new password, simply enter any secure password of your choosing so that the pi doesn’t have a default password anymore. You’ll also be asked to re-enter the password
5.	Once the password is set successfully you will see a confirmation message which you can close by pressing **enter/return**
6.	Select “1 System Options” again
7.	Select “S1 Wireless LAN” to setup wifi
8.	Choose your country from the list
9.	Press **enter/return** to advance through the prompt
10.	Enter the SSID of the wireless network that you’d like to use and press **enter/return**
11.	Enter the wifi password if necessary, if it is an open network, simply press **enter/return** to leave the field blank
12.	OPTIONAL - autologin to command line on boot (if you don’t want to login after every boot/reboot):
    1.	Select “1 System Options”
    2.	Select “S5 Boot / Auto Login”
    3.	Select “B2 Console Autologin”

##### Expanding the filesystem

1.	From the raspi-config main menu choose “Advanced Options”
2.	Select “A1 Expand Filesystem” and press **enter/return** – this will make sure you can use the entire SD card

##### Review other options (optional)

At this point the base system is setup, but there are other options in the menu to choose from. I won’t go over all the different options, but there may be other settings that you’d like to switch on like SSH, fan controls, etc. you can always come back and update later on as well.

##### Reboot

1.	From the main menu of the raspi-config press the left/right arrows on your keyboard to select “finish” and press **enter/return**
2.	When prompted choose “yes” to reboot the pi
    1.	If you accidentally press “no” type

            sudo reboot

        into the command line

## Using the command line

Once your system is rebooted you should be automatically logged in and brought right to the command line. If not, review the pi setup section and make sure you didn’t miss anything. 

### Update and Upgrade

1.	Enter the following command and press **enter/return** to check for any updates:

        sudo apt-get update
    
    If prompted type **Y** and press **enter/return** to install any available upgrades

2.	Enter the following command and press **enter/return** to get any upgrades:

        sudo apt-get upgrade

    If prompted type **Y** and press **enter/return** to install any available upgrades
 
### Installing Docker

1.	Enter the following command and press enter/return:

        sudo apt-get install docker.io
        
    If prompted type **Y** and press **enter/return** to install any available upgrades

2.	Enter the following command and press **enter/return**:

        sudo apt-get install docker-compose
        
    If prompted type **Y** and press **enter/return** to install any available upgrades

4.	If prompted about a kernel update:
    1.	press **enter/return** to close the message
    2.	leave the settings as-is and press **enter/return**
    3.	type the following command and press **enter/return** to reboot the system:

            sudo reboot

### Installing browsertrix

1.	enter the following command and press **enter/return**:

        sudo service docker start

2.	enter the following command and press **enter/return**:

        sudo docker pull webrecorder/browsertrix-crawler
        
    this may take a little while to download and decompress

### Creating a configuration YAML file

1.	enter the following command and press **enter/return**:

        sudo nano crawl-config.yaml

2.	follow the steps outlined at [https://www.sucho.org/browsertrix](https://www.sucho.org/browsertrix) in the section “Creating a configuration YAML file” to populate your YAML file.
    1.	Note – indentation in the “seeds” area is necessary and you must use spaces, not tabs
    2.	To save your YAML file press **ctrl+x**
    3.	When prompted to save press **Y**
    4.	When prompted to name your file, just make sure it’s named “crawl-config.yaml” and press **enter/return**

### Running Browsertrix 

1.	If you just booted up the machine, make sure that you start the docker service:

        sudo service docker start

2.	Enter the following command (all one line) and press **enter/return**:

        sudo docker run -v $PWD/crawl-config.yaml:/app/crawl-config.yaml -v $PWD/crawls:/crawls/ webrecorder/browsertrix-crawler crawl --config /app/crawl-config.yaml --text –generateWACZ

### Exiting Brosertrix

To exit browsertrix simply press **ctrl+c**

HAPPY SCRAPING!
