const jwt = require("jsonwebtoken");


module.exports = function(req, res, next) {
  const token = req.header("auth-token");
    if(!token) return res.status(401).send('acces denied');

try {
    const verfied = jwt.verify(token,process.env.tokensecret);
    req.user = verfied;
    next();
} catch (error) {
    res.status(400).send('invalid token');
}


};