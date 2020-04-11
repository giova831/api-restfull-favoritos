'use strict'

function prueba(req, res){

    if (req.params.nombre){
        var nombre = req.params.nombre;
    }
    else{
        var nombre = "SIN NOMBRE";
    }
    

    res.send({texto: "hola mundo con nodejs y express " + nombre});
}

function getFavorito(req, res){
    var favoritoId = req.params.id;
    res.status(200).send({data: favoritoId})
}

function saveFavorito(req, res){
    var params = req.body;
    res.status(200).send({favorito: params})
}

function deleteFavorito(req, res){
    var params = req.body;
    res.status(200).send({delete: true, favorito: params})
}

function updateFavorito(req, res){
    var params = req.body;
    res.status(200).send({update: true, favorito: params})
}

module.exports = {
    prueba,
    getFavorito,
    saveFavorito,
    updateFavorito,
    deleteFavorito
}