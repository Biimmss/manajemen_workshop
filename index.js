import "./models/index.js"
import express from "express"

const app = express();
const port = process.env.PORT;

app.listen(port, () => {
    console.log(`server running at ${port}`);
  });
  