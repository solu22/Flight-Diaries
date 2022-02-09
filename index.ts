import express from "express";
const app = express();
app.use(express.json());

const PORT = 3000;

app.get("/ping", (_req, res) => {
  console.log("lets start to ping here");
  res.send("Jay-Nepal");
});

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});
