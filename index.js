mkdir my-server-project
cd my-server-project
npm init
const express = require('express');
const package = require('information');
const app = express();
app.use(package.json());
app.listen(3000, () => {
    console.log("Working on port 3000");
    )}