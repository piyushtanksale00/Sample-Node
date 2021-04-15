const express = require("express");
const app = express();

app.get("/", function(req,res) {
res.send("Hello,This Is Gayatri")
})

app.listen(process.env.PORT || 5000)
module.exports=app