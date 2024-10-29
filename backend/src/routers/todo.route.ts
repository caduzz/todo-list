import * as express from "express"
import TodoController from "../controllers/todo.controller"

const router = express.Router()

const controller = new TodoController()

router.post("/create",
  (req, res) => controller.create(req, res)
)

router.get("/",
  (req, res) => controller.findAll(req, res)
)


export default router
