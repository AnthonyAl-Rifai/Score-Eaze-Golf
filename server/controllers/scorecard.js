const Scorecard = require('../models/scorecard');

const controller = {
  getScorecards: (req, res, next) => {
    const { player, date, course, par, score } = req.body;
    Scorecard.find({}, (err, scorecard) => {
      if (err) return next(err);
      res.locals = scorecard;
      return next();
    });
  },
  createScorecard: (req, res, next) => {
    const { player, date, course, par, score } = req.body;
    console.log(req.body);
    Scorecard.create({ player, date, course, par, score }, (err, scorecard) => {
      if (err) return next(err);
      res.locals = scorecard;
      return next();
    });
  },
  editScorecard: (req, res, next) => {
    const { player, date, course, par, score } = req.body;
    console.log(req.body);
    Scorecard.updateOne({_id: req.params.id}, { player, date, course, par, score }, (err, scorecard) => {
      if (err) return next(err);
      res.locals = scorecard;
      return next();
    });
  },
  deleteScorecard: (req, res, next) => {
    const { player, date, course, par, score } = req.body;
    Scorecard.deleteOne({_id: req.params.id}, (err, scorecard) => {
      if (err) return next(err);
      res.locals = scorecard;
      return next();
    });
  },
};

module.exports = controller;
