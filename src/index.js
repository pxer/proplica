const postcss = require('postcss');
const transfrom = require('postcss-js');

function proplica(raw) {
  const root = postcss.parse(raw);
  return transfrom.objectify(root);
}

module.exports = proplica;