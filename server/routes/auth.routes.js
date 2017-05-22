import { Router } from 'express';
import jwt from 'jsonwebtoken';
import passport from '../passport';

const router = new Router();

router.post('/login', (req, res, next) => {
  passport.authenticate('local', { session: false }, (err, user) => {
    if (err)
      return next(err);
    if (!user) {
      return res.status(401).json({
        user: { ok: false },
        message: 'Faliure to login',
      });
    }
    const payload = { email: user.email };
    const options = { subject: user.cuid };
    const token = jwt.sign(payload, 'secret', options);

    req.session.token = token;
    
    return res.json({
      message: '',
      user: { ok: true, token }
    });
  })(req, res, next);
});

router.get('/me', passport.authenticate('jwt', { session: false }), (req, res) => {
  return res.json({
    user: { ok: true }
  });
});

export default router;
