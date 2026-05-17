const npmCheck = require('npm-check');

npmCheck({
  ignoreDev: false,
  ignore: [],
}).then(currentState => {
  console.log('Outdated dependencies:', currentState.get('packages'));
});