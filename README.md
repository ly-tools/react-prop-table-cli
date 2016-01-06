# react-prop-table-cli

[![Test coverage](https://img.shields.io/coveralls/LingyuCoder/react-prop-table-cli.svg?style=flat-square)](https://coveralls.io/r/LingyuCoder/react-prop-table-cli?branch=master)
[![Build Status](https://travis-ci.org/LingyuCoder/react-prop-table-cli.png)](https://travis-ci.org/LingyuCoder/react-prop-table-cli)
[![Dependency Status](https://david-dm.org/LingyuCoder/react-prop-table-cli.svg)](https://david-dm.org/LingyuCoder/react-prop-table-cli)
[![devDependency Status](https://david-dm.org/LingyuCoder/react-prop-table-cli/dev-status.svg)](https://david-dm.org/LingyuCoder/react-prop-table-cli#info=devDependencies)
[![NPM version](http://img.shields.io/npm/v/react-prop-table-cli.svg?style=flat-square)](http://npmjs.org/package/react-prop-table-cli)
[![node](https://img.shields.io/badge/node.js-%3E=_4.0-green.svg?style=flat-square)](http://nodejs.org/download/)
[![License](http://img.shields.io/npm/l/react-prop-table-cli.svg?style=flat-square)](LICENSE)
[![npm download](https://img.shields.io/npm/dm/react-prop-table-cli.svg?style=flat-square)](https://npmjs.org/package/react-prop-table-cli)

Command line tool of [react-prop-table](https://github.com/LingyuCoder/react-prop-table), generate React proptypes table like a boss

## Installation

```bash
$ npm install -g react-prop-table-cli
```

## Usage

```bash
$ proptable

  Usage: proptable [options] <file>

  Options:

    -h, --help         output usage information
    -V, --version      output the version number
    -t, --type <type>  Result type, cli default

$ proptable file.jsx
┌────────────────────┬──────────────────────────────┬────────────────────┬──────────┬────────────────────┐
│ Name               │ Description                  │        Type        │ Required │   Default Value    │
├────────────────────┼──────────────────────────────┼────────────────────┼──────────┼────────────────────┤
│ optionalArray      │ Description of               │       Array        │          │         []         │
│                    │ optionalArray.               │                    │          │                    │
├────────────────────┼──────────────────────────────┼────────────────────┼──────────┼────────────────────┤
│ optionalBool       │ Description of optionalBool. │      Boolean       │          │       false        │
├────────────────────┼──────────────────────────────┼────────────────────┼──────────┼────────────────────┤
│ optionalFunc       │ Description of optionalFunc. │      Function      │          │      () => {}      │
...

$ proptable -t markdown file.jsx
| Name | Description | Type | Required | Default Value |
| :--- | :----- | :--- | :---: | :---: |
| optionalArray | Description of optionalArray. | Array |  | `[]` |
| optionalBool | Description of optionalBool. | Boolean |  | `false` |
| optionalFunc | Description of optionalFunc. | Function |  | `() => {}` |
...

$ proptable -t html file.jsx
<table>
  <thead>
    <tr>
      <th style="text-align: left">Name</th>
      <th style="text-align: left">Description</th>
      <th style="text-align: center">Type</th>
      <th style="text-align: center">Required</th>
      <th style="text-align: center">Default Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align: left">optionalArray</td>
      <td style="text-align: left">Description of optionalArray.</td>
      <td style="text-align: center">Array</td>
      <td style="text-align: center"></td>
      <td style="text-align: center"><code>[]</code></td>
    </tr>
    <tr>
      <td style="text-align: left">optionalBool</td>
      <td style="text-align: left">Description of optionalBool.</td>
      <td style="text-align: center">Boolean</td>
      <td style="text-align: center"></td>
      <td style="text-align: center"><code>false</code></td>
    </tr>
...
```

## Test

```bash
$ npm run test
$ npm run test-cov
$ npm run test-travis
```

## License

The MIT License (MIT)

Copyright (c) 2015 LingyuCoder

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
