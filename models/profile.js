import mongoose from 'mongoose'

const guessSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  episode: {
    type: Number,
    min: 1,
    max: 17,
  } 
})

const profileSchema = new mongoose.Schema({
  name: String,
  avatar: String,
  guessSeason: {
    type: String,
    max: 40,
  },
  favQueen: {
    type: String,
  },
  guessEpisode: [guessSchema],
}, {
  timestamps: true
})


const Profile = mongoose.model('Profile', profileSchema)

export {
  Profile
}
