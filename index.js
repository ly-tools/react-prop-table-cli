#!/usr/bin/env node

'use strict';
const program = require('commander');
const tableify = require('react-prop-table');
const fs = require('fs');
const path = require('path');
const pkg = require(path.join(__dirname, 'package.json'));

program.version(pkg.version)
  .usage('[options] <file>')
  .option('-t, --type <type>', 'Result type, cli default')
  .action((file, prog) => {
    let content;
    try {
      content = fs.readFileSync(file, 'utf-8');
    } catch (e) {
      console.error(`Can not read file ${file}`);
    }
    let type = prog.type || 'cli';
    if (type === 'markdown')
      console.log(tableify.markdown(content));
    else if (type === 'html')
      console.log(tableify.html(content));
    else
      console.log(tableify.cli(content));
  });

module.exports = program;
