
const jwt = require('jsonwebtoken');
const ensureAuthenticated = (req, res, next) => {

    // Retrieve JWT token from request headers
    const auth = req.headers['authorization'];

     // If no token is provided, deny access
    if (!auth) {
        return res.status(403)
            .json({ message: 'Unauthorized, JWT token is require' });
    }
    try {

        // Verify token using secret key
        const decoded = jwt.verify(auth, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (err) {
        return res.status(401)
            .json({ message: 'Unauthorized, JWT token wrong or expired' });
    }
}

module.exports = ensureAuthenticated;