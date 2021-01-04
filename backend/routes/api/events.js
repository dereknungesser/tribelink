const express = require('express');
const router = express.Router();

const { Event } = require('../../db/models/event')

router.get('/', async (req, res, next) => {
  console.log(Event)
  try {
    const eventList = await Event.findAll()
    console.log(eventList)
    res.json({eventList: eventList});
  } catch (e) {
    next(e);
  };
});

module.exports = router;
