import { Router } from "express";
import * as profilesCtrl from '../controllers/profiles.js'
import { isLoggedIn } from "../middleware/middleware.js";

const router = Router()

router.get('/', isLoggedIn, profilesCtrl.index)
router.get('/:id', isLoggedIn, profilesCtrl.show)
router.post('/favorites', isLoggedIn, profilesCtrl.create)
router.get('/:id/edit', isLoggedIn, profilesCtrl.editProfile)
router.put('/:id', isLoggedIn, profilesCtrl.updateFavQueen)
router.post('/:id/guessSeason', isLoggedIn, profilesCtrl.createSeasonGuess)
router.post('/favQuotes', isLoggedIn, profilesCtrl.createFavQuotes)
router.post('/guessEpisode', isLoggedIn, profilesCtrl.createEpisodeGuess)
router.get('/:id/editGuess', isLoggedIn, profilesCtrl.editGuessEpisode)
router.put('/:id', isLoggedIn, profilesCtrl.updateGuessEpisode)
router.delete('/:id/favQuotes/:favQuotesId', isLoggedIn, profilesCtrl.deleteQuote)
router.put('/:id/guessEpisode', isLoggedIn, profilesCtrl.updateGuessEpisode)



export {
  router
}