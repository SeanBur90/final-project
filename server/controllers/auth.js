import jwt from 'jsonwebtoken';
import User from '../models/user.js';

const auth = {
    ensureAuthenticated: function(req, res, next) {
        if (req.isAuthenticated()) {
          return next();
        }
        res.redirect('/');
      },
      forwardAuthenticated: function(req, res, next) {
        if (!req.isAuthenticated()) {
          return next();
        }
        res.redirect('/auth');      
      }
}

module.exports = auth