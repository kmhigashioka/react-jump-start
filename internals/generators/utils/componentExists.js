const fs = require('fs');
const path = require('path');

const components = fs.readdirSync(
  path.join(__dirname, '../../../src/components'),
);
const containers = fs.readdirSync(
  path.join(__dirname, '../../../src/containers'),
);

function componentExists(comp) {
  return [...components, ...containers].indexOf(comp) >= 0;
}

module.exports = componentExists;
