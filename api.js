let express = require("express");
let app = express();
let port = 3000;

app.get("/hello-world", (req, res) => {
    res.send("Hello World!");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})