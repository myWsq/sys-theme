#!/usr/bin/env node

const fs = require("fs-extra");
const path = require("path");
const folder = process.argv[2];

fs.copySync(path.join(__dirname, "..", "src"), folder);
