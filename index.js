const word = require('./views/word')
const help = require('./views/help')

//1. Get the word from the user
const args = process.argv.slice(2);
const query = args[0];


//if the user does not insert a word or ask for help..
if (!query || query.includes('--help')) {
  help()
} 
//otherwise we send a new request with the word
else {
  word(query);
}
