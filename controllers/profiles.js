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
    profile.favQuotes = req.body.quotes
    return profile.save(() => {
      res.redirect(`/profiles/${req.user.profile._id}`)
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/")
  })
}

function editProfile(req,res){
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
    profile.favQueen = req.body.favQueen
    profile.favQuotes.push(req.body.favQuotes)
    console.log('req.body:', req.body)
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

function updateFavQueen(req,res){
  Profile.findById(req.user.profile._id)
  .then(profile => {
    profile.favQueen = req.body.favQueen
    profile.save()
    .then(() => {
      res.redirect(`/profiles/${profile._id}/edit`)
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/")
  })
}

function createFavQuotes(req,res){
  Profile.findById(req.user.profile._id)
  .then(profile => {
    profile.favQuotes.push(req.body.favQuotes)
    profile.save()
    .then(() => {
      res.redirect(`/profiles/${profile._id}/edit`)
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
  editProfile,
  update,
  editGuessEpisode,
  updateGuessEpisode,
  updateFavQueen,
  createFavQuotes,
}