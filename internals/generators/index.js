const componentGenerator = require('./component');

module.exports = function generator(plop) {
  plop.setGenerator('component', componentGenerator);
};
