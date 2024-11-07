
const UserModel = require('../models/UserModel')

const userCreate = async (req , res, next) => {
    try {
        const user = await UserModel.findAll()
        res.send(users)

    } catch (error) {
        res.send ({
            'sucess':false,
            'error': `erro na requis~ção ${error}`
        })
    }
}   

const UsersCreate = async (req, res, next) => {
    try{
        const firstname = req.body.firstnameconst 
        surname = req.doby.surnameconst 
        email = req.body.email
        const password = req.body.password

    
        const user = await UserModel.create({
            firstname: firstname,
            surname: surname,
            email: email,
            password: password
        });

        res.status(201).send({
            'sucess': true,
            'message': `usuário cadastrado com sucesso! ID: ${user.id - user.name}`
        }) 
    }
    catch (error) {
        res.send({
            'sucess': false,
            'error': `erro na requisição ${error}`
        })
    }
}

const userList = async(req, res, next) => {
    console.log('asuag')
}

