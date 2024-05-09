module.exports = app => {
  app.db.sync()
  .then(() => {
    app.listen(
        app.get("port",() => {
            console.log(`NTask API = porta ${app.get("port")}`);
        })
        .catch(error => {
            console.log('Erro ao sincronizar o banco de dados: ',error);
        })
    );
  })
}