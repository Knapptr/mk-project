import express from "express";
import router from "./Routers/index";
import path from "path";

const PORT = process.env.PORT || 3000;
const app = express();

// Entryway Middlewares
app.use(express.json());

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

// Routers
app.use("/users", router.userRouter);
app.use("/tasks", router.taskRouter);
app.use("/requirements", router.requirementRouter);

// Run Server
app.listen(PORT, () => {
  console.log(`Server started. Listening on port ${PORT}`);
});
