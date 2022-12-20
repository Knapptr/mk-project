// for development
import db from "../utils/dev.json";

//////////////
import { IControllerComments, notImplemented } from "./utils";

const controller: IControllerComments = {
  viewAll: (req, res) => {
    res.render("tasks", { tasks: db.tasks });
  },
  create: notImplemented,
  delete: notImplemented,
  update: notImplemented,
  viewOne: (req, res) => {
    const id = req.params.id;
    const task = db.tasks.find((task) => task.id == id);
    console.log(task);
    res.render("task", { task: task });
  },
  addComment: notImplemented,
  addReply: notImplemented,
  deleteComment: notImplemented
};

export default controller;
