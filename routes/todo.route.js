import { Router } from "express";
import { todoController } from "../controllers/todo.controller.js";

const router = Router();

router.get('/likes', todoController.getAll);
router.post('/likes', todoController.create);
router.put('/likes/:id', todoController.update);
router.delete('/likes/:id', todoController.remove);

export default router;