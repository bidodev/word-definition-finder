 //import credentials
 const {id, key} = require('./config');

// const Search = require('./models/Search');
const axios = require('axios');

//1. Get the word from the user
const args = process.argv.slice(2);
const query = args[0];

//if the user does not insert a word or ask for help..
if (!query || query.includes('--help')) {
  console.log('Show help..');
} else {
  //1. Make a new search send the query..

  const endpoint = 'entries';
  const language_code = 'en-us';
  const word_id = `${query}`;

  const headers = {
    headers: {
      'app_id': id, 'app_key': key
    },
}
  url =
    'https://od-api.oxforddictionaries.com/api/v2/' +
    endpoint +
    '/' +
    language_code +
    '/' +
    word_id.toLowerCase();

  const res = axios.get(url, headers);
  res.then(res => {
    const {results} = res.data;
  
    results.forEach(result => {
        result.lexicalEntries.forEach(res =>{
          this.res = res;
        })
    });

    const {entries, language} = this.res;
    
    entries.forEach(entrie => {
      const {pronunciations, senses} = entrie;
      senses.forEach(element => {
        console.log(element.shortDefinitions)
      });
    });


  }).catch(err => console.log(err.message))
  
}
//2. Make a new API call and send the request and API_KEY
