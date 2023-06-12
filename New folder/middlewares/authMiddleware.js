const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    if (!token) {
      return res.status(401).json({ message: 'Authentication failed' });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
      if (err || redisClient.get(token)) {
        return res.status(401).json({ message: 'Authentication failed' });
      }

      req.userId = decodedToken.userId;
      next();
    });
  } catch (error) {
    res.status(500).json({ message: 'Authentication failed' });
  }
};

module.exports = authMiddleware;
