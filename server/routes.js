const { Hero, Team } = require('./db/models/index');
const router = require('express').Router();

router.get('/heroes', async (req, res)=>{
    heroes = await Hero.findAll();
    console.log(heroes.length)
    res.send({heroes});
});
router.get('/teams', async (req, res)=>{
    teams = await Team.findAll();
    res.send({teams});
});

router.get('/heroes/sort/:sort', async (req, res)=>{
    heroes = await Hero.findAll();
    console.log(req.params)
    const sortOrder=req.path.slice(13)
    switch(sortOrder){
        case 'Power': heroes.sort((a,b)=> a.powerLevel>b.powerLevel ? -1 : 1);
        break;
        case 'Power%20Reverse': heroes.sort((a,b)=> a.powerLevel<b.powerLevel ? -1 : 1);
        break;
        case 'Alias': heroes.sort((a,b)=> a.alias<b.alias ? -1 : 1);
        break;
        case 'Alias%20Reverse': heroes.sort((a,b)=> a.alias>b.alias ? -1 : 1);
        break;
        default: return heroes;
      }
      res.send(heroes) 
})

router.post('/heroes', async (req, res)=>{
    const { alias, name, powerLevel, team, TeamId } = req.body;
    const createdHero = Hero.create({
        alias,
        name,
        powerLevel,
        team,
        TeamId
    })
    res.status(201).send({
        hero: createdHero,
        message: `Hero ${createdHero.name} created sucessfully`
    })
})
router.post('/teams', async (req, res)=>{
    let { teamName, logo } = req.body;
    if (logo===''){
        logo=undefined
    }
    const createdTeam = Team.create({teamName, logo})
    res.status(201).send({
        hero: createdTeam,
        message: `Team ${createdTeam.teamName} created sucessfully`
    })
})

router.delete('/heroes/:id', async (req, res) => {
    const deletedHero =await  Hero.findByPk(req.params.id)
    await deletedHero.destroy()
    const heroes = await Hero.findAll()
    res.send(heroes)
})

router.delete('/teams/:id', async (req, res) => {
    const deletedTeam= await Team.findByPk(req.params.id)
    await deletedTeam.destroy()
    await Hero.destroy({where: {TeamId:null}})
    
    const teams = await Team.findAll();
    const heroes= await Hero.findAll();

    res.send({teams, heroes})
})

router.put('/heroes/:id', async (req, res)=>{
    const { id, alias, name, powerLevel, team, TeamId } = req.body
    await Hero.update({ name, alias, powerLevel, team, TeamId },{where:{ id }})
    const heroes=await Hero.findAll()
    res.send(heroes)
  })

router.put('/teams/:id', async (req, res)=>{
    const { id, teamName, logo } = await req.body
    await Team.update({ teamName, logo },{where:{ id }})
    const teams=await Team.findAll()
    res.send(teams)
})

router.get('/teams/largest', async (req, res)=>{
    const heroes = await Hero.findAll();
    const teams = await Team.findAll();
    const teamCount = heroes.reduce((accum, currentHero)=>{
        if (accum[currentHero.TeamId]){
            accum[currentHero.TeamId]=1+accum[currentHero.TeamId];
        } else {
            accum[currentHero.TeamId]=1;
        }
        return accum
    },{})
    let teamCountArr=(Object.entries(teamCount)).sort((a,b)=> a[1]>b[1] ? -1 : 1);
    const maxNum = teamCountArr[0][1];
    teamCountArr=teamCountArr.filter(team=> team[1]===maxNum);
    const largestTeams= teamCountArr.map(team => heroes.filter(hero => hero.TeamId === team[0]))
    res.send(largestTeams)
})

module.exports= router;