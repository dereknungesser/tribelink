const Messages = require('../../db/models')

async function list() {
  return await Messages.findAll();
}

router.get('/', asyncHandler(async function(_req, res) {
        const message = await Messages.list();
        return res.json(message);
}));

module.exports = { list };
