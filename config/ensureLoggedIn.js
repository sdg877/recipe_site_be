// export default function(req, res, next) {
//   // Status code of 401 is Unauthorized
//   if (!req.user) return res.status(401).json('Unauthorized');
//   next();
// };

export default function ensureLoggedIn(req, res, next) {
  // Allow POST requests to "/user" endpoint without authentication
  if (req.method === 'POST' && req.path === '/user') {
    return next();
  }

  // For other routes, check if user is authenticated
  if (!req.user) {
    return res.status(401).json('Unauthorized');
  }

  // User is authenticated, proceed to the next middleware
  next();
}
