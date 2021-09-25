const { response } = require('express');


const usuarioGet = (req, res = response) => {

    const query = req.query;

    res.json({
        msg: 'get API - controlador'
    })
}

const usuarioPost = (req, res) => {

    const {nombre, edad} = req.body;

    res.json({
        msg: 'Post API - controlador',
        nombre, edad
    })
}

const usuarioPut = (req, res) => {
    const {id} = req.params;

    res.json({
        msg: 'Put API - controlador',
        id
    })
}

const usuarioDelete = (req, res) => {
    res.json({
        msg: 'Delete API - controlador'
    })
}

module.exports = {
    usuarioGet,
    usuarioPost,
    usuarioPut,
    usuarioDelete
}