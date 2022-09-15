const mongoose = require('mongoose');

const scorecardSchema = new mongoose.Schema({
  player: { type: String, required: true },
  course: { type: String, required: true },
  date: { type: Date, required: true },
  par: { type: [Number], required: true },
  score: { type: [Number], required: true },
}, 
  // methods: {
  //   getAllScorecards(cb) {
  //     return mongoose.model('Scorecard').find()
  //   }
  // }
);

const Scorecard = mongoose.model('Scorecard', scorecardSchema);

module.exports = Scorecard;
