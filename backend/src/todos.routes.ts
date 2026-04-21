import express from "express";
import { prisma } from "./prisma";

const todosRoutes = express.Router();

todosRoutes.post("/todos", async (req, res) => {
  const { name } = req.body;
  const todo = await prisma.todo.create({ data: { name } });
  return res.status(201).json(todo);
});

todosRoutes.get("/todos", async (req, res) => {
  const todos = await prisma.todo.findMany();
  return res.status(200).json(todos);
});

todosRoutes.put("/todos/:id", async (req, res) => {
  const { id } = req.params;
  const { name, status } = req.body;

  if (!id) return res.status(400).json({ error: "ID is required" });

  const todoAlreadyExist = await prisma.todo.findUnique({ where: { id } });
  if (!todoAlreadyExist) {
    return res.status(404).json({ error: "Todo not found" });
  }

  const todo = await prisma.todo.update({
    where: { id },
    data: { name, status },
  });
  return res.status(200).json(todo);
});

todosRoutes.delete("/todos/:id", async (req, res) => {
  const { id } = req.params;

  if (!id) return res.status(400).json({ error: "ID is required" });

  const todoAlreadyExist = await prisma.todo.findUnique({ where: { id } });
  if (!todoAlreadyExist) {
    return res.status(404).json({ error: "Todo not found" });
  }

  await prisma.todo.delete({ where: { id } });
  return res.status(200).json({ message: "Todo deleted successfully" });
});

export { todosRoutes };
