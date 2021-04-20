const db = require("./db");
const User = require("./models/user");

db.on("error", console.error.bind(console, "MongoDB Connection Error!"));

const findAll = async () => {
  const users = await User.find();
  console.log("All Users", users);
};

const createUser = async () => {
  const user = [{ name: "Angel", age: 30, status: "active" }];
  await User.insertMany(user);
  console.log("Added User!", user);
};

const deleteUser = async () => {
  const user = await User.deleteOne({ name: "Joey" });
  console.log("User Deleted", user);
};

const updateUser = async () => {
  const user = await User.updateOne(
    { name: "Julie" },
    { $set: { name: "Julie", age: 22 } }
  );
  console.log("All Users", user);
};

const findAllNames = async () => {
  const users = await User.find({}, { name: 1 });
  console.log("All Names", users);
};

const findOlderThen25 = async () => {
  const users = await User.find({ age: { $gt: 25 } });
  console.log("All Users", users);
};

const activeAndLessThen25 = async () => {
  const users = await User.find({ status: "active", age: { $lt: 25 } });
  console.log("All Users", users);
};

const run = async () => {
  await findAll();
  // await createUser();
  // await deleteUser();
  // await updateUser();
  // await findAllNames();
  // await findOlderThen25();
  // await activeAndLessThen25();
  process.exit();
};

run();
