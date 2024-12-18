const jwt = require("jsonwebtoken");

const requireAuth = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ error: "Authorization token required" });
  }

  const token = authorization.split(" ")[1]; // Format: "Bearer <token>"

  try {
    const decoded = jwt.verify(token, process.env.SECRET);
    req.user = decoded; // Attaching the decoded user object to the request
    next();
  } catch (err) {
    res.status(401).json({ error: "Request is not authorized" });
  }
};

module.exports = requireAuth;
