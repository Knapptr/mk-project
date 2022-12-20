import { Router } from "express";
import reqController from "../Controllers/requirements";


const router = Router();

// View all requirements
router.get("/", reqController.viewAll);
// Add a requirement
router.post("/", reqController.create);
// Delete a requirement
router.delete("/:reqId", reqController.delete);
// Update a requirement
router.put("/:reqId", reqController.update);
// View one requirement
router.get("/:reqId", reqController.viewOne);
// Comment on requirement
router.post("/:reqId/comments", reqController.addComment);
// Reply to comment on requirement
router.get("/:reqId/comments/:commentId", reqController.addReply);
// Delete comment on requirement
router.delete("/:reqId/comments/:commentId", reqController.deleteComment);
export default router;
