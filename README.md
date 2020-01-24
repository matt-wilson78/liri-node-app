# liri-node-app

### This app calls on 3 separate APIs to provide information based on commands entered in the node.js command line.

The APIs included in this app are:
* OMDb
* Bands In Town
* Spotify

## General Description of Function

This app is built in javascript & relies on several dependencies. Axios is used to request & receive information from the APIs. Dotenv is used to "hide" the API keys, so that they aren't available to the public. Moment is used to convert date information retrieved from the Bands In Town API into a readable format.

To start the app, open a terminal in the root directory.  Once in the command line, type one of three commands:
* node liri.js movie-this "movie title here"
* node liri.js concert-this "band name here"
* node liri.js spotify-this-song "song name here"

The movie-this command will contact the OMDb API to pull relevant information about the movie entered.

The concert-this command contacts the Bands In Town API to search for upcoming concert dates of the band entered. If dates are found, it will return relevant information such as time, place, venue. If nothing is found it will reply that no upcoming concerts were found.

The spotify-this-song command contacts Spotify's API to return the top 3 matches for the song entered.

## Screenshots

Below are screenshots of each command's implementation & returned data:

** concert-this:

![Upcoming Opeth Tour Dates](/images/concert-this-opeth.png)

![Upcoming Iron Maiden Tour Dates](/images/concert-this-maiden.png)

** spotify-this-song

![Spotify Results for Aces High](/images/spotify-this-song.png)

![Spotify Results for Roxanne](/images/spotify-this-song.png)

