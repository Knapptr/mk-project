import { RequestHandler } from "express";

export interface IController {
  create: RequestHandler;
  delete: RequestHandler<{ id: string }>;
  viewOne: RequestHandler<{ id: string }>
  viewAll: RequestHandler;
  update: RequestHandler<{ id: string }>;
}
export interface IControllerComments extends IController {
  addComment: RequestHandler<{ commentId: string }>;
  addReply: RequestHandler<{ commentId: string }>;
  deleteComment: RequestHandler<{ commentId: string }>;

}

export const notImplemented: RequestHandler = (req, res) => res.send("not yet implemented")
