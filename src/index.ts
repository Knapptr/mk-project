import express from 'express';
const PORT = process.env.PORT || 3000;
const app = express();
import router from "./Routers/index";

// Entryway Middlewares
app.use(express.json)

// Routers
app.use("/users", router.userRouter);
app.use("/tasks", router.taskRouter);

// Run Server
app.listen(PORT, () => {
    console.log(`Server started. Listening on port ${PORT}`);
})


