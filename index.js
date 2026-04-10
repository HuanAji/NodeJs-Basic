import express from "express";
const app = express();
const port = 3000;
import bodyParser from "body-parser";
// Routes / url / endpoint utama kita method GET

app.use(bodyParser.json());

app.get("/", (request, response) => {
  response.send("utama");
});

app.get("/hello", (req, res) => {
  console.log({ urlParams: req.query });
  res.send("Hello World! tralalala");
});

app.post("/login", (req, res) => {
  console.log({ requestFromOutdside: req.body });
  res.send("Login berhasil");
});

app.put("/username", (req, res) => {
  console.log({ requestData: req.body });
  res.send("Update berhasil");
});

// untuk runnig express dibalik layar
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
