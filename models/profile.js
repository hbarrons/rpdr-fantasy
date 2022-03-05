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
    enum: ['Bosco', 'DeJa Skye', 'Willow Pill', 'Angeria Paris VanMicheals', 'Lady Camden', 'Daya Betty', 'Jasmine Kennedie', 'Jorgeous', 'Kerri Colby', 'Maddy Morphosis', 'Orion Story', "Kornbred 'The Snack' Jete", 'Alyssa Hunter', 'June Jambalaya']
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
