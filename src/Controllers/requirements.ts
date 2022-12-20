// for development
import db from "../utils/dev.json";

//////////////
import { RequestHandler } from "express";

type Controller = { [method: string]: RequestHandler };

const notImplemented: RequestHandler = (req, res) => res.send("not yet implemented")

const controller: Controller = {
  viewAll: (req, res) => {
    res.render("requirements", { requirements: db.requirements })
  },
  create: notImplemented,
  delete: notImplemented,
  update: notImplemented,
  viewOne: (req, res) => {
    const id = req.params.reqId;
    const requirement = db.requirements.find((requirement) => requirement.id == id)
    res.render("requirement", { req: requirement })
  },
  addComment: notImplemented,
  addReply: notImplemented,
  deleteComment: notImplemented

}

export default controller;
