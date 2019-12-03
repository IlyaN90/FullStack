const express = require('express')
const app = express()
const port = 3000

var redis = require("redis"),
    client = redis.createClient();
const { promisify } = require('util');
const getAsync = promisify(client.get).bind(client);

//get data stored in redis
app.get('/jobs', async (req, res) => {

   const jobs = await getAsync(`github`);
   return res.send(jobs);
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))