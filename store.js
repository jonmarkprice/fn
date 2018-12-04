const fs = require("fs");
// May want to use .

fs.readFile("tables/cons.json")
.then(data => JSON.parse(data))
.catch();
