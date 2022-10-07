if (process.env.NODE_ENV !== "Production") {
  require("dotenv").config();
}

import express from "express";
import { Application } from "express";
import * as bodyParser from "body-parser";

import routes from "./routes/routes";

const app: Application = express();

app.use(bodyParser.text({ type: "*/*" }));

app.use(routes);

app.listen(process.env.APP_PORT || 3000, () => {
  console.log(`App is listening on port ${process.env.APP_PORT}`);
});
