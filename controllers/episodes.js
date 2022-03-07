import { Episode } from '../models/episode.js'

function index(req, res) {
  console.log('episodes')
  Episode.find({})
  .then(episode => {
    res.render('episodes/index', {
      profiles,
      title: "Episode Details"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect(`/episodes`)
  })
}

function show(req,res){
  console.log('show episode')
  // Episode.findById(req.params.id)
  // .then(episode => {
  //   equals(req.params.id)
  //     res.render("episodes/show", {
  //       title: "RPDR Fantasy",
  //       episode,
  //     })
  //   })
  // .catch(err => {
  //   console.log(err)
  //   res.redirect("/")
  // })
}

export {
  index,
  show,
}