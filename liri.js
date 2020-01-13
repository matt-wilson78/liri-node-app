require("dotenv").config();

var keys = require(".keys.js");
var axios = require("axios");
var moment = require("moment");
var fs = require("fs");
var Spotify = require("node-spotify-api");

var command = process.argv[2];
var userInput = process.argv[3];

var spotify = new Spotify(keys.spotify);

function caseSwitches(commmand, userInput) {
    switch (command) {
        case "movie-this":

        if (userInput === undefined) {
            userInput = "Mr Nobody";
        }

        axios.get(`http://www.omdbapi.com/?t=${userInput};&y=&plot=short&apikey=${keys.omdb.key}`).then(
            function(res) {
                console.log(`\n**********  Movie Results  **********\n`);
                console.log(`Name: ${res.data.Title} \n 
                    Release Year: ${res.data.Year} \n
                    IMDB Rating: ${res.data.imdbRating} \n
                    Rotten Tomatoes rating: ${res.data.Ratings[1].Value} \n
                    Language: ${res.data.Language} \n
                    Plot summary: ${res.data.Plot} \n
                    Cast: ${res.data.Actors}`);
                console.log(`\n*************************************\n`);
            }), function(err, data) {
                if (err) {
                    console.log("Error occurred: " + err);
                }
            }

        break;

        case "concert-this":

        if (userInput === undefined){
            console.log("Please enter the band you're looking for");
        } else {
            axios.get(`https://rest.bandsintown.com/artists/${userInput}/events?app_id=${keys}`).then(
                function(res) {
                    if (res.data[0] === undefined) {
                        console.log(`No shows scheduled at this time`);
                    } else {
                        for (let i = 0; i < 4; i++) {
                            var date = moment(res.data[i].datetime);
                            var formated = date.format("MM/DD/YYYY");
                            console.log(`\n**********  Upcoming Concerts  **********\n`);
                            console.log(`Venue: ${res.data[i].venue.name} \n
                                Location: ${res.data[i].venue.city}, ${res.data[i].venue.region} \n
                                Date: ${date}`);
                        }
                    }
                }), function(err) {
                    if (err) {
                        console.log("Error: " + err);
                    }
                }
        }
    }
}