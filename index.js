const API_URL = require('./config');
const Search = require('./models/Search');

//1. Get the word from the user
const args = process.argv.slice(2);
const query = args[0];

//if the user does not insert a word or ask for help..
if((!query) || query.includes('--help')) {
    console.log('Show help..');
}
else {
  //1. Make a new search send the query..
  console.log(query);
}
//2. Make a new API call and send the request and API_KEY
