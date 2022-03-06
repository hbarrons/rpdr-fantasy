import { Profile } from '../models/profile.js'

function index(req, res) {
  Profile.find({})
  .then(profiles => {
    res.render('profiles/index', {
      profiles,
      title: "All Players"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect(`/profiles/${req.user.profile._id}`)
  })
}

function show(req,res){
  Profile.findById(req.params.id)
  .then(profile => {
    const isSelf = req.user.profile._id.equals(req.params.id)
      res.render("profiles/show", {
        title: "RPDR Fantasy",
        profile,
        isSelf
      })
    })
  .catch(err => {
    console.log(err)
    res.redirect("/")
  })
}

function createSeasonGuess(req,res){
  Profile.findById(req.user.profile._id)
  .then(profile => {
    profile.guessSeason = req.body.guessSeason
    profile.save()
    .then(() => {
      res.redirect(`/profiles/${req.user.profile._id}`)
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/")
  })
}

function createEpisodeGuess(req,res) {
  console.log(req.body)
  Profile.findById(req.user.profile._id)
  .then(profile => {
    profile.guessEpisode.push(req.body)
    profile.save()
    .then(() => {
      res.redirect(`/profiles/${req.user.profile._id}`)
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/")
  })
}

function create(req,res){
  Profile.findById(req.user.profile._id)
  .then(profile => {
    console.log('req.body: ', req.body)
    profile.favQueen = req.body.queen
    profile.quotes = req.body.quotes
    return profile.save(() => {
      res.redirect(`/profiles/${req.user.profile._id}`)
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/")
  })
}

// function create(req,res){
//   Profile.findById(req.user.profile._id, function(err, profile) {
//     profile.queen = req.body.queen
//     console.log('profile.queen: ', profile.queen)
//     profile.quotes.push(req.body.quotes)
//     console.log('profile.quote: ', profile.quote)
//     profile.save(err => {
//       res.redirect(`/profiles/${req.user.profile._id}`)
//     })
//   })
// }

function editFavQueen(req,res){
  Profile.findById(req.user.profile._id)
  .then(profile => {
      res.render(`profiles/edit`, {
        profile,
        title: 'Update Favorites'
    })
  })
}
  
function update(req,res){
  Profile.findById(req.user.profile._id)
  .then(profile => {
    profile.favorites = req.body
    profile.save()
    .then(() => {
      res.redirect(`/profiles/${req.user.profile._id}`)
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/")
  })
}

function editGuessEpisode(req,res){
  Profile.findById(req.user.profile._id)
  .then(profile => {
      res.render(`profiles/editGuess`, {
        profile,
        title: 'Update This Weeks Guess'
    })
  })
}

function updateGuessEpisode(req,res){
  console.log('update guess')
  // Profile.findById(req.user.profile._id)
  // .then(profile => {
  //     res.render(`profiles/editGuess`, {
  //       profile,
  //       title: 'Update This Weeks Guess'
  //   })
  // })
}


export {
  index,
  show,
  createSeasonGuess,
  createEpisodeGuess,
  create,
  editFavQueen,
  update,
  editGuessEpisode,
  updateGuessEpisode,
}