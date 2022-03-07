import { Router } from "express";
import * as episodesCtrl from '../controllers/episodes.js'
import { isLoggedIn } from "../middleware/middleware.js";

const router = Router()

router.get('/', isLoggedIn, episodesCtrl.index)


export {
  router
}