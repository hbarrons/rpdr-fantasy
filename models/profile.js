import mongoose from 'mongoose'

const guessSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  episode: {
    type: Number,
    min: 1,
    max: 17,
  },
}, {
  timestamps: true
})

const favoritesSchema = new mongoose.Schema({
  queen: {
    type: String,
  },
  quote: {
    type: String,
  },
})

const profileSchema = new mongoose.Schema({
  name: String,
  avatar: String,
  guessSeason: {
    type: String,
  },
  favorites: [favoritesSchema],
  guessEpisode: [guessSchema],
}, {
  timestamps: true
})


const Profile = mongoose.model('Profile', profileSchema)

export {
  Profile
}
