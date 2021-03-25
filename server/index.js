import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import passport from "passport";
import passportConfig from "./config/passport.js";

import postRoutes from './routes/posts.js'
import userRoutes from './routes/user.js'
import loginRoutes from './routes/login.js'

const app = express();
dotenv.config();


passportConfig(passport);

app.use(passport.initialize());
app.use(passport.session());

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

app.use('/posts', postRoutes);
app.use('/auth', userRoutes);
app.use('/login', loginRoutes);



const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false)
