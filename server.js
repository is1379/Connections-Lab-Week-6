let express = require('express');
let app = express();

app.use("/", express.static("Public"))

app.listen(3000, ()=> {
    console.log("app is listening at localhost:3000");
})