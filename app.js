const express = require("express");
const bodyParser = require("body-parser");

const app = express();
var first = "";

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}))

app.get("/", function (req, res) {
    var today = new Date();

    var options = {
        weekday: 'long',
        year: 'numeric',
        day: 'numeric',
        month: 'narrow'
    };
    var day = today.toLocaleDateString("en-US", options);
    res.render("list",{
        kinday: day , kin0day: first
    });

});
app.post("/", function(req, res){
    var first = req.body.fName;
    res.redirect("/");
});
app.listen(3000, function () {
    console.log("Server started on port 3000,");
})