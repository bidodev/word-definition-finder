//imports
const Search = require('./models/Search');

//1. Get the word from the user
const args = process.argv.slice(2);
const query = args[0];

//if the user does not insert a word or ask for help..
if (!query || query.includes('--help')) {
  console.log('Show help..');
} else {
  //2. Make a new API call and send the request and API_KEY
  const search = new Search(query);
  search
    .buildURL()
    .then((res) => {
      const { results } = res;

      results.forEach((result) => {
        result.lexicalEntries.forEach((res) => {
          return ({ entries, language } = res);
        });
      });

      entries.forEach((entrie) => {
        const { pronunciations, senses } = entrie;

        senses.forEach((element) => {
          console.log(element.shortDefinitions);
        });
      });
    })
    .catch((err) => console.log(err.message));
}
