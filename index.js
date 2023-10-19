import path, {dirname} from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import session from 'express-session';

import userRoutes from './routes/user.js';

//create the path

const __filename = fileURLToPath(import.meta.url);
const PATH = dirname(__filename);

// initialize dotenv

dotenv.config();

const PORT = process.env.PORT || 3005;

// int express

const app = express();

// parse the body 
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// template engine

app.set('view engine', 'ejs');
app.set('views',path.join(PATH, 'views'));

// initialize cookies and session 
app.use(cookieParser());
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true
}));
//user routes

app.use('/user', userRoutes);

// handle 404
app.use('*',(req,res)=>{
    res.status(404).render('message',{title:'page not found',message:'page not found'})});

//listen to the port

app.listen(PORT,()=>{
    console.log(`server is app and running on port:${PORT}`);
})
