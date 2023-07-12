import express from "express";
import { PORT } from "./server/utils/environmental.js";

const app = express();

// eslint-disable-next-line no-console
app.listen(PORT || 8081, () => console.log(`Now listening on ${PORT || 8081}`));
