const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get(["/", "/:tz"], (req, res) => {
  let xmas = new Date(Date().getFullYear(), 11, 25);
  //tz = req.params["tz"];
  res.header("Access-Control-Allow-Origin", "*");
	//Quais são os métodos que a conexão pode realizar na API
  res.header("Access-Control-Allow-Methods", 'GET');
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(xmas == (new Date()).setHours(0,0,0,0)));
});

app.listen(port, () => console.log(`EntaoENatalService app listening on port ${port}!`))


