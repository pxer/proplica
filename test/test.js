const assert = require('assert');
const styled = require('../src/index');

describe('proplica', function() {
  describe('run as function', function() {
    it('import css like string will parse to ', function() {
      const style = styled`
        color: #FFFFFF;
      `;
      assert.equal(style.color, '#FFFFFF');
    });
  });
});