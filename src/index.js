import express from "express";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import morgan from "morgan";

import indexRoutes from "./routes/index.routes.js";

const app = express();

const PORT = process.env.PORT || 3000;

const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(morgan("dev"));
app.set("views", join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(indexRoutes);
app.use(express.static(join(__dirname, "public")));

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
