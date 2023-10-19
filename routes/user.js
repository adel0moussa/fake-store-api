import express from 'express';
const userRoutes = express.Router();

// set cookie and session
userRoutes.get('/', (req, res) => {
    req.session.userName = 'AdelMoussa';
    res.cookie('name', 'Adel', { maxAge: 5 * 60 * 1000 });
    res.send('hello');
});

//get cookie & session
userRoutes.get('/verify', (req, res) => {
    const { name } = req.cookies;
    console.log(name);
    console.log(req.session.userName);
    if (req.session && req.session.userName && name) {
        const userName = req.session.userName;
        res.send(`hello ${name} your username is: ${userName}`);
    } else {
        res.send('session or cookie is not valid');
    }
});

export default userRoutes;