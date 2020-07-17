const Hero = require ('./Heroes.js');
const Team = require ('./Teams');
const { startingHeroes, startingTeams } = require ('../seedData');
const { db } = require('../db');

Team.hasMany(Hero);
Hero.belongsTo(Team, {foreignKey: {allowNull:false}, onDelete: 'CASCADE'});

const seed = async ()=>{
      const heroes = await Promise.all(startingHeroes.map( hero => Hero.create(hero)));
      const teams = await Promise.all(startingTeams.map( team => Team.create(team)));
      await heroes.forEach(async (hero)=>{
          const team = await Team.findOne({where: {teamName: `${hero.team}`}})
          await team.addHeros(hero)  
      })

      console.log('Database Seeded Successfully')
}

const sync = async (force = false) => {
      try {
        await db.sync({ force });
        if (force) {
          await seed();
        }
        console.log(`Database synced successfully! Force: ${force}`);
      } catch (e) {
        console.log(`Database failed to sync.`);
        throw e;
      }
}

module.exports = {
    Hero,
    Team,
    sync
}