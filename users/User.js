const Sequelize = require("sequelize");
const connection = require("../database/database");
const User = connection.define('users',{
    user_st_nome:{
        type: Sequelize.STRING,
        allowNull: false
    },
    user_st_login:{
        type: Sequelize.STRING,
        allowNull: false
    },
    user_st_email:{
        type: Sequelize.STRING,
        allowNull: false
    },
    user_st_password:{
        type: Sequelize.STRING,
        allowNull: false
    },
    user_in_cad:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    user_in_status:{
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

//User.sync({force: false});

module.exports = User;