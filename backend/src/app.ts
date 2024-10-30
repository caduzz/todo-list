import * as express from 'express'

import 'express-async-errors'

import TaskRouter from './routers/task.route'
import ErrorMiddlewares from './middlewares/error.middlewares'

class App {
  public error: ErrorMiddlewares
  public app: express.Express

  constructor() {
    this.error = new ErrorMiddlewares()
    this.app = express()

    this.config()

    this.app.use('/task', TaskRouter)
    this.app.use(this.error.handling)
  }

  private config(): void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };

    this.app.use(express.json())
    this.app.use(accessControl)
  }

  public start(PORT: string | number): void {
    this.app.listen(PORT, () => console.log(`Running on port ${PORT} 🫡`))
  }
}

export default App