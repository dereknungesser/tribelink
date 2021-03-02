const express = require('express');
const router = express.Router();
const { restoreUser } = require('../../utils/auth');

const { Event, User } = require('../../db/models')


router.post('/', restoreUser, async (req, res, next) => {
  const { userId, startTime, endTime, name, body } = req.body
  try {
    const createdEvent = await Event.create({userId, startTime, endTime, name, body})
    const newEvent = await Event.findByPk(createdEvent.id, {include: [User]})
    res.json(newEvent)
  } catch (e) {
    next(e)
  }
});

router.get('/', restoreUser, async (req, res, next) => {
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
