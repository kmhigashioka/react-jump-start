const componentGenerator = require('./component');
const containerGenerator = require('./container');

module.exports = function generator(plop) {
  plop.setGenerator('component', componentGenerator);
  plop.setGenerator('container', containerGenerator);
};
