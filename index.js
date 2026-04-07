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

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
