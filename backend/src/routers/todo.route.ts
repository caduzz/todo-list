import * as express from "express"
import TodoController from "../controllers/todo.controller"
import TodoMiddleware from "../middlewares/todo.middlewares"

const router = express.Router()

const controller = new TodoController()
const middleware = new TodoMiddleware()

router.post("/create",
  (req, res, next) => middleware.create(req, res, next),
  (req, res) => controller.create(req, res)
)

router.get("/",
  (req, res) => controller.findAll(req, res)
)

router.put("/:todo_id",
  (req, res, next) => middleware.update(req, res, next),
  (req, res) => controller.updateStatusById(req, res)
)

router.delete("/:todo_id",
  (req, res, next) => middleware.delete(req, res, next),
  (req, res) => controller.deleteById(req, res)
)

export default router
