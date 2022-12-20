import { Router } from "express";
import reqController from "../Controllers/requirements";


const router = Router();

// View all requirements
router.get("/", reqController.viewAll);
// Add a requirement
router.post("/", reqController.create);
// Delete a requirement
router.delete("/:id", reqController.delete);
// Update a requirement
router.put("/:id", reqController.update);
// View one requirement
router.get("/:id", reqController.viewOne);
// Comment on requirement
router.post("/:id/comments", reqController.addComment);
// Reply to comment on requirement
router.get("/:id/comments/:commentId", reqController.addReply);
// Delete comment on requirement
router.delete("/:id/comments/:commentId", reqController.deleteComment);
export default router;
