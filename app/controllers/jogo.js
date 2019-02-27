module.exports.jogo = function (application, req, res) {
    if (req.session.autorizado !== true) {
        res.send("Usuário precisa fazer login");
        return;
    };

    var usuario = req.session.usuario;
    var connection = application.config.dbConnection;
    var JogoDAO = new application.app.models.JogoDAO(connection);

    JogoDAO.iniciaJogo(usuario);

    res.render('jogo', { img_casa: req.session.casa });
}

module.exports.sair = function (application, req, res) {
    req.session.destroy(function (err, resp) {
        res.redirect('/');
    });
}