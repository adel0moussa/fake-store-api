const createSession = (req,res,next)=>{
    req.session.isLoggedIn=false;
    next();
};

export default createSession;