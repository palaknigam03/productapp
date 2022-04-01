const { response } = require('express');
const { request } = require('express');
const Admin = require('../model/admin.model');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');
exports.signup = (request, response) => {
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
        //console.log(request.body);
        return response.status(403).json({ errors: errors.array() })
    }
    //console.log(request.body);

    let username = request.body.username;
    let userEmail = request.body.email;
    let userPassword = request.body.password;

    Admin.create({ username: username, email: userEmail, password: userPassword })
        .then(result => {
            console.log(result);
            return response.status(201).json(result);
        })
        .catch(err => {
            console.log(err);
            return response.status(500).json({errors:"server err.."});
        });
}

exports.signin = (request, response) => {
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
        return response.status(403).json({ errors: errors.array() })
    }
    let userEmail = request.body.email;
    let userPasword = request.body.password;

    Admin.findOne({ email: userEmail, password: userPasword })
        .then(result => {
            // console.log(result);
            if (result) {
                let payload = { subject: result._id };
                let token = jwt.sign(payload, 'jskjkdjfjfkfj');
                return response.status(201).json({
                    result:result,
                    token:token
                });
            }
        }).catch(err => {
            console.log(err);
            return response.status(500).json({errors:'server err...'});

        });
}
