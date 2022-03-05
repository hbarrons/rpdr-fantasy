import { Profile } from '../models/profile.js'

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

export {
  show,
}