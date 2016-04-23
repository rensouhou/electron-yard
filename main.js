console.log('main.js entry point');

require('babel-core').transform('code', {
  plugins: ['transform-runtime', 'syntax-flow', 'syntax-object-rest-spread']
});

require('./main.include');
