const Sequelize = require('sequelize');
const { UUID, UUIDV4, STRING, INTEGER } = Sequelize;
const {db} = require('../db');

const Hero = db.define('Hero', {
    id:{
        type:UUID,
        defaultValue: UUIDV4,
        primaryKey: true
    },
    alias:{
        type: STRING,
        unique:true,
        allowNull:false
    },
    name:{
        type:STRING,
        defaultValue:'N/A'
    },
    powerLevel:{
        type: INTEGER,
        allowNull:false
    },
    team:{
        type:STRING
    }
})

module.exports=Hero