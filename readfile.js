const fs = require("fs");
const { promisify } = require("util")

// TODO
const { createHTML } = require("./render");

const filepath = process.argv[2];

promisify(fs.readFile)(filepath)
.then(data => JSON.parse(data))
.then(createHTML)
// .then(x => x.toString())
.then(console.log)
// writeFile
.catch(err => console.log(err));