// export default function ensureLoggedIn(req, res, next) {
//   if (req.method === 'POST' && req.path === '/user') {
//     return next();
//   }

//   if (!req.user) {
//     return res.status(401).json('Unauthorized');
//   }

//   next();
// }

function ensureLoggedIn(req, res, next) {
  if (req.method === 'POST' && req.path === '/user') {
    return next();
  }

  if (!req.user) {
    return res.status(401).json('Unauthorized');
  }

  next();
}

module.exports = ensureLoggedIn;
