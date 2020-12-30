const express = require('express');
const router = express.Router();

const { Event } = require('../../db/models')

router.get('/', async (req, res, next) => {
  try {
    const eventList = await Event.findAll()
    res.json({eventList: eventList});
  } catch (e) {
    next(e);
  };
});

module.exports = router;
