import express from 'express';
import passport from 'passport';


const router = express.Router();


router.post('/', (req, res, next) => {
    passport.authenticate("local", (err, user, info) => {
      if (err) throw err;
      if (!user) res.send("No User Exists");
      else {
        req.logIn(user, (err) => {
          if (err) throw err;
          res.send("Successfully Authenticated");
          res.redirect('/posts');
          console.log(req.user);
        });
      }
    })(req, res, next);
  });

export default router;