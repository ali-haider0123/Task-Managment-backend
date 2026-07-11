const { Router } = require("express");
const taskController = require("../controllers/task.controller");
const authenticate = require("../middleware/user.middleware")

const taskRouter = Router();

taskRouter.post("/", authenticate, taskController.Add);
taskRouter.get("/", authenticate, taskController.GetAll);
taskRouter.put("/:id", taskController.Update);
taskRouter.delete("/:id", taskController.Delete);

module.exports = taskRouter;