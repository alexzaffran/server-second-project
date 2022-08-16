const User = require('./userSchema');

const getAllUsers = async () => {
  let data = await User.find({});

  return data;
};

const getUser = async (id) => {
  try {
    console.log(`userBL getUser - start`);
    let data = await User.findById(id);
    console.log(`userBL getUser - end`);
    return data;
  } catch (error) {
    console.error(`userBL getUser - error: ${JSON.stringify(error)}`);
  }
};

const getUserByName = (name) =>{
  return User.find({"name" :{$regex : `^${name}`, "$options": "i" }})
}

const addUser = async (obj) => {
  try {
    console.log(`userBL addUser - start`);
    let user = new User({
      name: obj.name,
      email: obj.email,
      street: obj.street,
      city: obj.city,
      zipcode: obj.zipcode,
      tasks: obj.tasks,
      posts: obj.posts,
    });

    await user.save();
    console.log(`userBL addUser - end`);
    return user;
  } catch (error) {
    console.error(`userBL addUser - error: ${JSON.stringify(error)}`);
  }
};

const deleteUser = async (id) => {
  await User.findByIdAndDelete(id);
};

const updateUser = async (id, obj) => {
  const user = await User.findByIdAndUpdate(id, {
    name: obj.name,
    email: obj.email,
    street: obj.street,
    city: obj.city,
    zipcode: obj.zipcode,
    tasks: obj.tasks,
    posts: obj.posts,
  });

  return await User.findOne({ _id: user._id });
};

const getAllTasks = async () => {
  let data = await Task.find({});

  return data;
};

const getTaskByUser = async (id) => {
  try {
    console.log(`taskBL getTask - start`);
    let data = await Task.findById(id);
    console.log(`taskBL getTask - end`);
    return data;
  } catch (error) {
    console.error(`taskBL getTask - error: ${JSON.stringify(error)}`);
  }
};

const addTask = async (obj) => {
  try {
    console.log(`taskBL addTask - start`);
    let task = new Task({
      title: obj.title,
      completed: obj.completed,
    });

    await task.save();
    console.log(`taskBL addTask - end`);
    return User.task;
  } catch (error) {
    console.error(`taskBL addTask - error: ${JSON.stringify(error)}`);
  }
};

module.exports = {
  getUser,
  addUser,
  getAllUsers,
  deleteUser,
  updateUser,
  getAllTasks,
  getTaskByUser,
  addTask,
  getUserByName,
};
