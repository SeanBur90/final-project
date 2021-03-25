import express from 'express';

import { registerPost } from '../controllers/posts.js'

const router = express.Router();


router.post('/', registerPost);

// router.post('/login', (req, res, next) => {
//     passport.authenticate("local", (err, user, info) => {
//       if (err) throw err;
//       if (!user) res.send("No User Exists");
//       else {
//         req.logIn(user, (err) => {
//           if (err) throw err;
//           res.send("Successfully Authenticated");
//           console.log(req.user);
//         });
//       }
//     })(req, res, next);
//   });

export default router;