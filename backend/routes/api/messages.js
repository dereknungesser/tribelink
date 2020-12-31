const express = require('express');
const router = express.Router();
const csrf = require('csurf')

const csrfProtection = csrf({ cookie: true });

const { MessageBoard } = require('../../db/models')

router.post('/', csrfProtection, async (req, res) => {
    const createdMessage = await MessageBoard.create(req.body)
    console.log(createdMessage)
    res.json(createdMessage)
});

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
