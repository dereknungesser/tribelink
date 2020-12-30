const express = require('express');
const router = express.Router();

const { MessageBoard } = require('../../db/models')

router.get('/', async (req, res, next) => {
  try {
    const messagesList = await MessageBoard.findAll()
    console.log(messagesList)
    res.json({messagesList: messagesList});
  } catch (e) {
    next(e);
  };
});

module.exports = router;
