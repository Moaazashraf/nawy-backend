import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import baseRoutes from "../Routes/routes";

dotenv.config();

const app: Express = express();

const port = process.env.PORT || 3000;

// Middleware setup for JSON parsing
app.use(express.json());
// Middleware setup for "/nawy/apartments"
app.use("/nawy/apartments", baseRoutes);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
