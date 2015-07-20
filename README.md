# steal-template

[![Build Status](https://travis-ci.org/stealjs/steal-template.svg?branch=master)](https://travis-ci.org/stealjs/steal-template)
[![npm version](https://badge.fury.io/js/steal-template.svg)](http://badge.fury.io/js/steal-template)

**steal-template** is a [http://stealjs.com](StealJS) plugin for creating template functions.  steal-template uses [lodash template](https://lodash.com/docs#template) behind the scenes.

## Install

```shell
npm install steal-template --save
```

## Usage

Here's a simple hello world example:

### hello.txt

```
Hello <%= name %>!
```

### main.js

```js
var hello = require("hello.txt!steal-template");

hello({ name: "world" }); // -> "Hello world!"
```

## License

MIT
