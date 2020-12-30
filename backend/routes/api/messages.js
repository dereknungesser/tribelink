const express = require('express');
const router = express.Router();
const csrf = require('csurf')
const csrfProtection = csrf({ cookie: true });

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

router.post('/', csrfProtection, async (req, res, next) => {
  try {
    const createdMessage = await MessageBoard.create(req.body)
    return res.json(createdMessage)
  } catch (e) {
    next(e)
  };
});

module.exports = router;
