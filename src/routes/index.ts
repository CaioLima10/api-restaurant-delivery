import { usersRouter } from "./users-routes"
import { Router } from "express"

const routes = Router()

routes.use("/users", usersRouter)

export { routes }