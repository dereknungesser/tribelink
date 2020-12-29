const MessagesRepository = require('../../db/messages-repository');

router.get('/', asyncHandler(async function(_req, res) {
        const pokemon = await MessagesRepository.list();
        return res.json(pokemon);
      }));
