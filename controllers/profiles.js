import { Profile } from '../models/profile.js'

function show(req,res){
  console.log('my profile')
  // Profile.findById(req.params.id)
  // .then(profile => {
  //   Profile.findById(req.user.profile._id)
  //   .then(self => {
  //     const isSelf = self._id.equals(profile._id)
  //     res.render("profiles/show", {
  //       title: "RPDR Fantasy",
  //       profile,
  //       isSelf
  //     })
  //   })
  // })
  // .catch(err => {
  //   console.log(err)
  //   res.redirect("/")
  // })
}

export {
  show,
}