module.exports = func =>(rrq,res,next)=>{
    Promise.resolve(func(req,res,next))
            .catch(next);
}