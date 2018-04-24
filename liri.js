require("dotenv").config();

require('./keys.js');


var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);

var nodeArg = process.argv;
var action = process.argv[2];
var value = process.argv[3];