const router = require('express').Router();

const verify = require('./verifytoken');

router.get('/',verify,(req, res) => {
  res.json({post:{title:'Hello',description:'sadasd'}})
})











module.exports = router;