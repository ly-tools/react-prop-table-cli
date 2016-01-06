'use strict';

require('should');
require('mocha-sinon');
const program = require('../index');
const fs = require('fs');
const path = require('path');
const CWD = process.cwd();
const uncolor = require('uncolor');
const expectedPath = path.join(CWD, 'test', 'expected');

describe('react-prop-table-cli', () => {
  let rst;
  beforeEach(function() {
    this.sinon.stub(console, 'log', function() {
      rst = arguments[0];
    });
  });
  it('cli es5', () => {
    program.parse([
      'node',
      './bin/proptable',
      'test/es5.jsx'
    ]);
    return uncolor(rst).trim().should.be.eql(fs.readFileSync(path.join(expectedPath, 'table.cli'), 'utf-8').trim());
  });
  it('cli es5', () => {
    program.parse([
      'node',
      './bin/proptable',
      'test/es6.jsx'
    ]);
    return uncolor(rst).trim().should.be.eql(fs.readFileSync(path.join(expectedPath, 'table.cli'), 'utf-8').trim());
  });
  it('markdown es5', () => {
    program.parse([
      'node',
      './bin/proptable',
      '--type',
      'markdown',
      'test/es5.jsx'
    ]);
    return uncolor(rst).trim().should.be.eql(fs.readFileSync(path.join(expectedPath, 'table.md'), 'utf-8').trim());
  });
  it('html es5', () => {
    program.parse([
      'node',
      './bin/proptable',
      '--type',
      'html',
      'test/es5.jsx'
    ]);
    return uncolor(rst).trim().should.be.eql(fs.readFileSync(path.join(expectedPath, 'table.html'), 'utf-8').trim());
  });
  it('html es6', () => {
    program.parse([
      'node',
      './bin/proptable',
      '--type',
      'html',
      'test/es6.jsx'
    ]);
    return uncolor(rst).trim().should.be.eql(fs.readFileSync(path.join(expectedPath, 'table.html'), 'utf-8').trim());
  });
  it('markdown es6', () => {
    program.parse([
      'node',
      './bin/proptable',
      '--type',
      'markdown',
      'test/es6.jsx'
    ]);
    return uncolor(rst).trim().should.be.eql(fs.readFileSync(path.join(expectedPath, 'table.md'), 'utf-8').trim());
  });
});
