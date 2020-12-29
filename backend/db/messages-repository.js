const { MessageBoard } = require("./models");

async function list() {
    return await MessageBoard.findAll();
};

module.exports = { list };
