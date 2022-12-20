// for development
import db from "../utils/dev.json";

//////////////
import { IControllerComments, notImplemented } from "./utils";

const controller: IControllerComments = {
  viewAll: (req, res) => {
    res.render("requirements", { requirements: db.requirements });
  },
  create: notImplemented,
  delete: notImplemented,
  update: notImplemented,
  viewOne: (req, res) => {
    const id = req.params.id;
    const requirement = db.requirements.find(
      (requirement) => requirement.id == id
    );
    res.render("requirement", { req: requirement });
  },
  addComment: notImplemented,
  addReply: notImplemented,
  deleteComment: notImplemented
};

export default controller;
