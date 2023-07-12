import express from "express";
import { PORT } from "./server/utils/environmental.js";

const app = express();

app.get("/", (_, res) => {
  res.json({ message: "Hello World!" });
});

app.listen(PORT || 3001, () =>
  // eslint-disable-next-line no-console
  console.log(`Now listening on localhost:${PORT || 3001}`),
);
