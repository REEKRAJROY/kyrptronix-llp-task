const express = require('express');
const router = express.Router();
const { addUser, getUsers, getUser } = require('../handlers/userHandle')

router.post('/users', async (req, res) => {
    await addUser(req.body);
    res.send('Added to db')
  })

  router.get('/users', async (req, res) => {
    const userDetails = await getUsers();
    res.send(userDetails)
  })

  router.get('/user/:id', async (req, res) => {
    const userDetail = await getUser(req.params["id"]);
    res.send(userDetail)
  })

module.exports = router;