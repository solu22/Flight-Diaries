import express from "express";
import diaryRouter from './routes/diaries';
const app = express();
app.use(express.json());

const PORT = 3003;

app.get("/ping", (_req, res) => {
  console.log("lets start to ping here");
  res.send("Jay-Nepal");
});

app.use('/api/diaries', diaryRouter);


app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});
