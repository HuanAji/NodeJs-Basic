import express from "express";
const app = express();
const port = 3000;
// Routes / url / endpoint utama kita method GET

app.get("/", (request, response) => {
  response.send("utama");
});

app.get("/index", (req, res) => {
  res.send("Hello World!");
});

app.post("/login", (req, res) => {
  console.log({ requestFromOutdside: req });
  res.send("Login berhasil");
});

// untuk runnig express dibalik layar
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
