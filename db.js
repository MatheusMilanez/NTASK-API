const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");

let db = null;

module.exports = app => {
    if (!db) {
        const config = app.libs.config;
        const sequelize = new Sequelize(
            config.database,
            config.username,
            config.password,
            config.params
        );

        db = {
            sequelize,
            Sequelize,
            models: {}
        };

        const modelsDir = path.join(__dirname, "models");
        fs.readdirSync(modelsDir).forEach(file => {
            const modelDir = path.join(modelsDir, file);
            const model = require(modelDir)(sequelize, Sequelize.DataTypes); 
            db.models[model.name] = model;
        });

        Object.keys(db.models).forEach(key => {
            if (db.models[key].associate) {
                db.models[key].associate(db.models);
            }
        });
    }
    return db;
}
