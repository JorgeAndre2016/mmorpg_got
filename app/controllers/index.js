module.exports.index = function(application, req, res){
    res.render('index', {validacao: {}, dadosForm: {}});
}

module.exports.autenticar = function(application, req, res){
    var dadosForm = req.body;

    req.assert('usuario', 'Usuário não deve ser vazio').notEmpty();
    req.assert('senha', 'Senha não deve ser vazia').notEmpty();

    var error = req.validationErrors();

    if(error) {
        res.render("index", {validacao: error, dadosForm});
        return;
    }

    res.send('tudo ok');
}