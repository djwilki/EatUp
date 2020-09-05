const { route } = require('./users');

const router = require('express').Router();

const routes = ['users', 'session', 'csrf'];

for (let route of routes) {
  router.use(`/${route}`, require(`./${route}`));
}

router.all("*", (req, res)=>{
  console.log("Unexpected backed route", req.method, req.url, req.path);
  res.end(777);
})

module.exports = router;
