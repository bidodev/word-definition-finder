const axios = require('axios');
const url = require('url');

//import credentials
const { id, key } = require('../../config');

class Search {
  constructor(query, language = 'en-us') {
    this.word = query;
    this.language = language;
    this.url = 'https://od-api.oxforddictionaries.com/api/v2/';
  }

  //method to resolve the url
  buildURL(endpoint = 'entries') {
    const URL =
      url.resolve(this.url, endpoint) + `/${this.language}` + `/${this.word}`;

    const headers = {
      headers: {
        app_id: id,
        app_key: key,
      },
    };
    return axios
      .get(URL, headers)
      .then((res) => res.data)
      .catch((err) => Promise.reject(err.response));
  }
}

module.exports = Search;
