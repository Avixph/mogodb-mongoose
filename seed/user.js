const db = require("../db");
const User = require("../models/user");

db.on("error", console.error.bind(console, "MongoDB Connection Error!"));

const main = async () => {
  const users = [
    { name: "Benny", age: 28, status: "active" },
    { name: "Claire", age: 28, status: "active" },
    { name: "Joey", age: 28, status: "active" },
    { name: "Abe", age: 22, status: "pending" },
    { name: "Sunny", age: 23, status: "pending" },
    { name: "Lizzy", age: 28, status: "active" },
    { name: "Julie", age: 21, status: "active" },
  ];

  await User.insertMany(users);
  console.log("Users Created!");
};

const run = async () => {
  await main();
  db.close();
};

run();
