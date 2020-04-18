const MobileDetect = require('mobile-detect');

export default ({ req, app }) => {
  const md = new MobileDetect(req.headers['user-agent']);
  app.serverMobileDetected = Boolean(md.mobile())
}