#!/usr/bin/env node
const wordDefinition = require('./views/word');

//source learning
//https://markoskon.com/yargs-examples/
const { argv } = require('yargs')
  .scriptName('word-definition')
  .usage('Usage: $0 -w anyword')
  .example('$0 -w happy')
  .example('$0 -word happy')
  .option('w', {
    alias: 'word',
    describe: 'A word to search',
    demandOption: 'The word is required.',
    type: 'string',
    nargs: 1,
  })
  .describe('help', 'Show help.') // Override --help usage message.
  .describe('version', 'Show version number.') // Override --version usage message.
  .epilog('Copyright 2020');

//get the word
const { word } = argv;

//finally we call our lib
wordDefinition(word);