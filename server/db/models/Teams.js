const Sequelize = require('sequelize');
const { UUID, UUIDV4, STRING } = Sequelize;
const {db} = require('../db');

const Team = db.define('Team', {
    id:{
        type:UUID,
        defaultValue: UUIDV4,
        primaryKey: true
    },
    teamName:{
        type: STRING,
        unique:true,
        allowNull:false
    },
    logo:{
        type:STRING,
        defaultValue:'https://lifeandtrendz.com/wp-content/uploads/2016/04/Super_Hero_Day.jpg'
    }
})

module.exports=Team;