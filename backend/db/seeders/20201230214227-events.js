'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Events', [
      {
        name: "Timmy Long's Virtual Birthday Party",
        body: "Come join us in our Zoom meeting for Timmy's party. I will email the details to you all soon!",
        userId: 2,
        scheduleId: 1,
        startTime: 4,
        endTime: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "New Year's Bash!",
        body: "I'm going to livesteam on NYE and want to invite you all to watch the ball drop with me.",
        userId: 3,
        scheduleId: 1,
        startTime: 9,
        endTime: 12,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Movies?",
        body: "My neighbor told me you can rent out an entire movie theatre for $100 because of Covid. Anyone interested? I was thinking this Sunday afternoon.",
        userId: 3,
        scheduleId: 1,
        startTime: 1,
        endTime: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Events', null, {});
  }
};
