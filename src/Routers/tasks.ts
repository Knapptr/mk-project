import express from "express";
import tasks_controller from "../Controllers/tasks";

const router = express.Router();

router.get("/", tasks_controller.viewAll);

router.get("/:id", tasks_controller.viewOne);

export default router;
