const userBL = require('../models/usersBL');

const express = require('express');
const router = express.Router();

router.get('/', async function (req, resp) {
  let users = await userBL.getAllUsers();

  return resp.json(users);
});


router.get('/:id', async function (req, resp) {
  try {
    console.log(`user router get router - start`);
    let id = req.params.id;
    let user = await userBL.getUser(id);
    console.log(`user router get - end`);
    return resp.json(user);
  } catch (error) {
    console.error(`user router get - error: ${JSON.stringify(error)}`);
    resp.status(500).json(error);
  }
});

router.get('/search/:name', async function (req, resp) {
  let name = req.params.name;
  let users = await userBL.getUserByName(name);

  return resp.json(users);
});


router.post('/', async function (req, resp) {
  try {
    console.log(`user router add user - start`);
    let obj = req.body;
    let user = await userBL.addUser(obj);
    console.log(`user router add user  - end`);
    return resp.json(user);
  } catch (error) {
    console.error(`user router  add user - error: ${JSON.stringify(error)}`);
    resp.status(500).json(error);
  }
});

router.put('/:id', async function (req, resp) {
  let obj = req.body;
  let id = req.params.id;
  const user = await userBL.updateUser(id, obj);
  return resp.json(user);
});

router.delete('/:id', async function (req, resp) {
  let id = req.params.id;
  return resp.json(await userBL.deleteUser(id));
});

router.get('/task', async function (req, res) {
    let tasks = await userBL.getAllTasks();

  return res.json(tasks);
});

router.get('/task/:id', async function (req, res) {
  try {
    console.log(`task router get router - start`);
    let id = req.params.id;
    let user = await userBL.getTaskByUser(id);
    console.log(`task router get - end`);
    return res.json(user);
  } catch (error) {
    console.error(`task router get - error: ${JSON.stringify(error)}`);
    res.status(500).json(error);
  }
});

router.post('task', async function (req, resp) {
  try {
    console.log(`user router add task - start`);
    let obj = req.body;
    let user = await userBL.addUser(obj);
    console.log(`user router add task  - end`);
    return resp.json(user);
  } catch (error) {
    console.error(`user router  add task - error: ${JSON.stringify(error)}`);
    resp.status(500).json(error);
  }
});

router.put('/task/:id', async function (req, resp) {
  let obj = req.body;
  let id = req.params.id;
  await userBL.updateUser(id, obj);
  return resp.json('Updated !');
});
router.delete('/task/:id', async function (req, resp) {
  let id = req.params.id;
  let users = await userBL.deleteUser(id);
  return resp.json(users);
});

module.exports = router;
