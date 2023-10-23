const isLoggedIn=(req,res,next)=>{
    if(req.session &&req.session.isLoggedIn){
        next();
    }else{
        res.status(302).redirect('/form-login');
    }
};

export default isLoggedIn;