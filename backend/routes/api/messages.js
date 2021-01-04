const express = require('express');
const router = express.Router();
const { restoreUser } = require('../../utils/auth');

const { MessageBoard, User } = require('../../db/models')

router.post('/', restoreUser, async (req, res, next) => {
    const { userId, body } = req.body
    try {
      const createdMessage = await MessageBoard.create({userId, body})
      const newMessage = await MessageBoard.findByPk(createdMessage.id, {include: [User]})
      res.json(newMessage)
    } catch (e) {
      next(e)
    }
});

router.get('/', async (req, res, next) => {
  try {
    const messagesList = await MessageBoard.findAll({
      include: [User]
    })
    console.log(messagesList)
    res.json({messagesList: messagesList});
  } catch (e) {
    next(e);
  };
});

module.exports = router;
