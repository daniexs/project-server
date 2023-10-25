function errorHandler(err,eq,res,next){
    let status = 500
    let message = "Internal server error"
    if(err.name === "SequelizeValidationError" || err.name === "SequelizeUniqueConstraintError"){
        status = 400
        message = err.errors[0].message
    }else if(err.name === "JsonWebTokenError"){
        status = 401
        message = "Invalid token"
    }else if(err.name === "Invalid email/password"){
        status = 401
        message = err.name
    }else if(err.name === "not_found"){
        status = 404
        message = err.name
    }else if(err.name === "You are not authorized"){
        status = 403
        message = err.name
    }
    
    res.status(status).json({message})
}

module.exports = errorHandler