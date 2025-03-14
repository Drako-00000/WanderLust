const User = require("../models/user");

module.exports.renderSigUpForm = (req,res)=>{
    res.render("users/signup.ejs")
}

module.exports.signUp = async (req,res)=>{
    try{
    let {username, email, password} = req.body;
    const newUser = new User({email, username});
    const registeredUser = await User.register(newUser, password);
    req.login(registeredUser, (err)=>{
        if(err){
            return next(err);
        }
        req.flash("success", "Welcome to WanderLust");
        res.redirect("/listings");
    })
    
    // console.log(registeredUser);
    } catch(e){
        req.flash("error", e.message);
        res.redirect("/signup");
    }
}

module.exports.renderLoginForm = (req,res)=>{
    res.render("users/login.ejs");
}

module.exports.login = async(req,res)=>{ // passport.authenticate("local", {failureRedirect: "/login", failureFlash: true}), --> this function allows you to authenticate users...its' not working here
    req.flash("success", "Welcome back to WanderLust!");
    let redirectUrl = res.locals.redirectUrl || "/listings";
    res.redirect(redirectUrl);
}

module.exports.logout = (req,res,next)=>{
    req.logout((err) => {
        if(err) {
            return next(err);
        }
        req.flash("success", "You are logged out");
        res.redirect("/listings");
    })
}