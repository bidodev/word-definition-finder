//imports
const Search = require('../models/Search');

//default configs
const language = "en-us";
const endpoint = "entries";

//2. Make a new API call and send the request and API_KEY
const newWord = (query) => {
  const search = new Search(query, language);
  search
    .buildURL(endpoint)
    .then((res) => {
      const { results } = res;

      results.forEach((result) => {
        result.lexicalEntries.forEach((res) => {
          return ({ entries, ...props } = res);
        });
      });

      const { language, text, lexicalCategory } = props;
      console.log(`Word: ${text} (${lexicalCategory.text}), Language: ${language}\n`);

      entries.forEach((entrie) => {
        const { pronunciations, senses } = entrie;

        senses.forEach((element, index) => {
          const result = `${index + 1}. ` + element.shortDefinitions.join('');
          console.log(result);
        });
      });

      console.log(`\nProvided by: Oxford University`);
    })
    .catch((err) => console.log(err.message));
};

module.exports = newWord;
