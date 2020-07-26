const jwt = require('jsonwebtoken');
const config = require('config');

// This is a middleware function
/* Basically a function that has access to the 
request and response objects and next is a callback we have
to run when we're done so it runs to the next piece
of middleware*/
module.exports = function(req, res, next) {
    // Get token from header
    const token = req.header('x-auth-token');

    // Check if not token
    if (!token) {
        return res.status(401).json({ msg: 'No token, authorization denied' })  // 401 = not authorized
    }

    // Verify token
    try {
        const decoded = jwt.verify(token, config.get('jwtSecret')); // Decodes the token

        req.user = decoded.user;
        next();
    } catch(err) {
        res.status(401).json({ msg: 'Token is not valid' });
    }
}
