const express = require('express');
const scorecardController = require('../controllers/scorecard');
const router = express.Router();

router.get('/scorecard', scorecardController.getScorecards, (req, res) => {
  res.status(200).json(res.locals);
});

router.post('/scorecard', scorecardController.createScorecard, (req, res) => {
  res.status(200).json(res.locals);
});

router.put('/scorecard/:id', scorecardController.editScorecard, (req, res) => {
  res.status(200).json({});
});

router.delete('/scorecard/:id', scorecardController.deleteScorecard, (req, res) => {
  res.status(200).json(res.locals);
});

module.exports = router;
