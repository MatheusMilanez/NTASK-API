module.exports = app => {
  app.db.sequelize.sync().then(() => {
      app.listen(app.get("port"), () => {
          console.log(`NTask API running on port ${app.get("port")}`);
      });
  }).catch(err => {
      console.error('Database synchronization failed:', err);
  });
};
