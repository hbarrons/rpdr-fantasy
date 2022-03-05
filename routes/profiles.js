import { Router } from "express";
import * as profilesCtrl from '../controllers/profiles.js'
import { isLoggedIn } from "../middleware/middleware.js";

const router = Router()

router.get('/', profilesCtrl.index)
router.get('/:id', isLoggedIn, profilesCtrl.show)
router.post('/guessSeason', isLoggedIn, profilesCtrl.createSeasonGuess)
router.post('/favQueen', isLoggedIn, profilesCtrl.createFavQueen)


export {
  router
}