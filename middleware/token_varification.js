const { response } = require('express');
const { request } = require('express');
const jwt = require('jsonwebtoken');
exports.verifyToken = (request,response,next)=>{
    try{
        //console.log('Token:'+request.headers.authorization);
        if(!request.headers.authorization)
            return response.status(401).send("Oopps...Unauthorized requset!1");
           if(request.headers.authorization == null)
               return response.status(401).send("Oopps..Unauthorized request!3")
            
            let token = request.headers.authorization.split(" ")[1];
            let payload = jwt.verify(token,"jskjkdjfjfkfj");
            console.log(payload); 
            next();      
    }
    catch(err){
        console.log(err);
        return response.status(401).send("Oops..Unauthorized request!3");
    }
}