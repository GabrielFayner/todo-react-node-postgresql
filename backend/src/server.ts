import "dotenv/config";
import cors from "cors";
import express from "express";
import { todosRoutes } from "./todos.routes";

const app = express();
const PORT = Number(process.env.PORT) || 3333;

app.use(cors());
app.use(express.json());
app.use(todosRoutes);

app.get("/health", (_req, res) => {
  return res.json("up");
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
