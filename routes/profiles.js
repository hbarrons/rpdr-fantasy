import { Router } from "express";
import * as profilesCtrl from '../controllers/profiles.js'
import { isLoggedIn } from "../middleware/middleware.js";

const router = Router()

router.get('/', profilesCtrl.index)
router.get('/:id', isLoggedIn, profilesCtrl.show)
router.post('/favorites', isLoggedIn, profilesCtrl.create)
router.get('/:id/edit', isLoggedIn, profilesCtrl.editFavQueen)
router.put('/:id', isLoggedIn, profilesCtrl.update)
router.post('/guessSeason', isLoggedIn, profilesCtrl.createSeasonGuess)
router.post('/guessEpisode', isLoggedIn, profilesCtrl.createEpisodeGuess)


export {
  router
}