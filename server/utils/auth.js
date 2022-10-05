// using jwt
const jwt = require("jsonwebtoken");

const secret = "supersecretsecret";
const expiration = "2h";

module.exports = {
  authMiddleware: function ({ req }) {
    // toekn is sent via req.body, re.query, or headers
    let token = req.body.token || req.query.token || req.headers.authorization;

    // ["Bearer", "<tokenvalue>"]
    if (req.headers.authorization) {
      token = token.split(" ").pop().trim();
    }
    // if there isn't a token, return req
    if (!token) {
      return req;
    }

    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
    } catch {}
    // return updated requested object
    return req;
  },
  signToken: function ({ username, email, _id }) {
    const payload = { username, email, _id };

    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
