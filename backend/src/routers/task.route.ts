import * as express from "express"
import TaskController from "../controllers/task.controller"
import TodoMiddleware from "../middlewares/task.middlewares"

const router = express.Router()

const controller = new TaskController()
const middleware = new TodoMiddleware()

router.post("/create",
  (req, res, next) => middleware.create(req, res, next),
  (req, res) => controller.create(req, res)
)

router.get("/",
  (req, res) => controller.findAll(req, res)
)

router.put("/:task_id",
  (req, res, next) => middleware.update(req, res, next),
  (req, res) => controller.updateStatusById(req, res)
)

router.delete("/:task_id",
  (req, res, next) => middleware.delete(req, res, next),
  (req, res) => controller.deleteById(req, res)
)

export default router
