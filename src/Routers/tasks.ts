import express from "express";
import tasks_controller from "../Controllers/tasks";

const router = express.Router();

// View all tasks
router.get("/", tasks_controller.viewAll);

// View specific task
router.get("/:id", tasks_controller.viewOne);

export default router;
