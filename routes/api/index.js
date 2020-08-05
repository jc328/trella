const router = require('express').Router();

const routes = ['landingpage', 'login'];

for (let route of routes) {
  router.use(`/${route}`, require(`./${route}`));
}

module.exports = router;
