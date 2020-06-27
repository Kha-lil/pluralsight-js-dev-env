//This file isn't transpiled,  so must use Common JS and ES5

//Register babel to transpile before our test runs.
require('babel-register')();
//Disable Webpack featires that Mocha doesn't understand.
require.extensions['.css'] = function() {};
/* this above expression states that if it sees any .css file, it should treat it as an empty function */
