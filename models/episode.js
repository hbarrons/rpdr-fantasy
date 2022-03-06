import mongoose from 'mongoose'

const episodeSchema = new mongoose.Schema({
  number: {
    type: Number,
    unique: true
  },
  winner: {
    type: String,
  },
  loser: {
    type: String,
  }
}, {
  timestamps: true
})




const Profile = mongoose.model('Profile', profileSchema)

export {
  Profile
}
