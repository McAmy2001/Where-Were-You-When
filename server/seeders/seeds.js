const { faker } = require('@faker-js/faker');

const db = require('../config/connection');
const { User, Memory } = require('../models');

db.once('open', async () => {
  await User.deleteMany({});
  await Memory.deleteMany({});
  
  // Create User data
  const userData = [];

  for (let i = 0; i < 10; i += 1) {
    const username = faker.internet.userName();
    const email = faker.internet.email(username);
    const password = faker.internet.password();

    userData.push({ username, email, password });
   }

  const createdUsers = await User.collection.insertMany(userData);
  console.log(userData.length);

   // Create Memory data
   const memoryData = [];
   for (let i = 0; i < 20; i++) {
    const memoryText = faker.lorem.words(Math.round(Math.random() * 20) +1);
    const randomUserIndex = Math.floor(Math.random() * 10);
    const { username, _id: userId } = userData[randomUserIndex];
    const memoryYear = Math.floor(Math.random() * (2021 - 1916) + 1916);
    const memoryMonth = Math.floor(Math.random() * (12 - 1) + 1);
    const memoryDate = Math.floor(Math.random() * (28 - 1) +1);
    const createdMemory = await Memory.create({ memoryText, username, memoryYear, memoryMonth, memoryDate });
    const updatedUser = await User.updateOne(
      { _id: userId },
      { $push: { memory: createdMemory._id } }
    );
    memoryData.push(createdMemory);
   }

  console.log('all done!');
  process.exit(0);
});