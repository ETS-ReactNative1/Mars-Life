# Mars-Life
Ever wonder what life would be like on Mars? Keep up with your favorite red planet with daily Martian weather updates, rover photos, and stellar space facts all on this handy mobile app..

## Minimum Viable Product (MVP)
* Use the [Insight: Mars Weather Service API](https://api.nasa.gov/assets/insight/InSight%20Weather%20API%20Documentation.pdf) to get and display daily weather information on Mars on detail, similar to the iPhone weather app
* Use the [Mars Rover Photos API](https://api.nasa.gov/) to get and display pictures of Mars
* Have a news page that displays space news articles, upcoming missions from NASA/SpaceX, etc.
* Show Mars' orbit in the solar system
* Touch and scroll through a map of Mars using the [NASA Trek API](https://trek.nasa.gov/tiles/apidoc/trekAPI.html?body=mars)

## Stretch Goals
* Send out notifications about Mars news and weather
* Ability to toggle between 3d view and flat view of Mars terrain
* Discussion section for talking about Mars events
* User profiles and authentication
* Find a way to seel it to musk and/or get Elon Musk to record some voice lines

## Tech Stack
### General Software
* [Git Bash](https://git-scm.com/downloads)
  * [Git Cheat Sheet](https://education.github.com/git-cheat-sheet-education.pdf)
* [Android Studio](https://developer.android.com/studio)
* [Figma](https://www.figma.com/) or [Adobe XD](https://www.adobe.com/products/xd.html) for wireframing
### Tech Stack
#### Mobile Application Framework: [React Native](https://reactnative.dev/) 
* Uses Javascript, has an active and established dev community
#### Backend: [MongoDB](https://www.mongodb.com/)
* Flexible and scalable, uses JSON, part of the popular MERN stack, focuses on data storage
### APIs: many options, you're not limited to this list :)
There's lots of [NASA APIs](https://api.nasa.gov/) to look at: 
* [Insight: Mars Weather Service API](https://api.nasa.gov/assets/insight/InSight%20Weather%20API%20Documentation.pdf)
  * Provides per-Sol summary data for each of the last 7 available Sols (Martian Days)
  * Data from InSight Mars lander: continues weather measurements of temperature, wind, and pressure at Elysium Planitia (flat smooth plain near Mar’s equator)
* Mars Rover Photos API
  * Collects image data from NASA’s Curiosity, Opportunity, and Spirit Mars rovers
  * Photos organized by the sol (Martian day) which they were taken
  * Can also search by Earth date (probably more useful for this app) and filter photos by each camera
  * Mission manifest: list details of Rover’s mission (e.g. name, landing date, launch date, mission status, etc.)
* [Space Weather Database of Notifications, Knowledge, Information (DONKI)](https://ccmc.gsfc.nasa.gov/donki/)
  * Daily interpretations of space weather observations, analysis, forecasts
  * Geomagnetic Storm (GST), Interplanetary Shock (IPS), Solar Flare (FLR), etc. APIs
* Asteroids - Near Earth Object Web Service (NeoWs) API
  * Search for asteroids based on their closest approach date to Earth
There's also plent of other space-related APIs out there, feel free to add to this list: 
* [Open Notify API](http://open-notify.org/Open-Notify-API/People-In-Space/)
  * Get the current number of people in space, along with their names and spacecraft if known
## Resources
### Learning Resources
Look through all of these at the beginning :)
- [How to be successful in ACM Projects](https://docs.google.com/document/d/1mRIWzmfmJO3MCsvR9vr6VI94GnVYtHqZiq4sqMd3fic/edit?usp=sharing)
- [Overview of making API calls](https://snipcart.com/blog/apis-integration-usage-benefits)
- [Professor Cole's How to Program](https://personal.utdallas.edu/~jxc064000/HowToProgram.html)
### Git
[Video: Learn Git in 15 minutes](https://youtu.be/USjZcfj8yxE)
| Command | Description |
| :-----: | :---------: |
| cd "Mars-Life" | Change directories to our repository |
| git branch | Lists branches |
| git branch "branch name " | Makes a new branch |
| git checkout "branch name" | Switch to branch |
| git checkout -b "branch name" | 2 previous commands combined |
| git add . | Finds and adds all changed files to your next commit |
| git commit -m "msg" | Commit with message |
| git push origin "branch" | Push to branch |
| git pull origin "branch" | Pull updates from a specific branch |
| ^ thanks Emily! | :)|
