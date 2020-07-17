const axios = require("axios");
const types = require('./types');

const getTeams = ()=> async (dispatch) => {
    return await axios.get('/api/teams')
        .then((res)=>{
            dispatch({
                type: types.GET_TEAMS,
                payload: res.data.teams
            })
        })
        .catch((e)=>{
            console.log('failed to fetch Team');
            console.log(e);
        })
}

const sort = (type) => async (dispatch) =>{
    return await axios.get(`api/heroes/sort/${type}`)
        .then((res)=>{
            dispatch({
                type: types.GET_HEROES,
                payload: res.data
            })
        })
        .catch((e)=>{
            console.log('failed to fetch Heroes');
            console.log(e);
        })
}


const getHeroes = ()=> async (dispatch) =>{
    return await axios.get('/api/heroes')
        .then((res)=>{
            console.log(res)
            dispatch({
                type: types.GET_HEROES,
                payload: res.data.heroes
            })
        })
        .catch((e)=>{
            console.log('failed to fetch Hero');
            console.log(e);
        })
}

const addHero = (obj) => async (dispatch) => {
    return axios.post('/api/heroes', {
        alias: obj.alias,
        name: obj.name,
        powerLevel: Number(obj.powerLevel),
        team: obj.team,
        TeamId: obj.TeamId
    })
        .then(() => axios.get('/api/heroes'))
        .then((res)=> {
            dispatch({
            type: types.ADD_HER0,
            payload: res.data.heroes
            })
        })
        .catch((e)=>{
            console.log(e);
        })
}

const addTeam = (obj) => async (dispatch) => {
    return axios.post('/api/teams', {
        teamName: obj.teamName,
        logo: obj.logo,
    })
    .then(()=> axios.get('/api/teams'))
    .then((res)=> {
        dispatch({
            type: types.ADD_TEAM,
            payload: res.data.teams
        })
    })
    .catch((e)=>{
        console.log(e);
    })
}

const deleteTeam = (id)=> async(dispatch)=>{
    const deletedTeam = {id}
    await axios.delete(`/api/teams/${id}`, deletedTeam)
    .then(res=>{
        console.log(res.data)
            dispatch({
                type: types.DELETE_TEAM,
                payload: res.data
            })
        })
        // .then(async ()=>{
        //     await axios.get('/api/heroes')
        //     .then(async(res) => {
        //         const deletedHeroes = await res.data.heroes.filter(hero => hero.TeamId===null)
        //         deletedHeroes.forEach(async hero => {
        //             await axios.delete(`/api/heroes/${hero.id}`)
        //             console.log('done')
        //         })
        //     })
            // .then (()=>{
            //     return axios.get('/api/heroes')
            //     .then((res)=>{
            //     console.log(res.data)
            //         dispatch({
            //             type: types.DELETE_HEROES,
            //             payload: res.data
            //         })
            //     })
            // })
        // })
        .catch((e)=>{
            console.log('failed to delete Team')
            console.log(e)
        })
}
        
const deleteHero = (id)=> async (dispatch)=>{
    const deletedHero = {id}
    return axios.delete(`/api/heroes/${id}`, deletedHero)
        .then(res=>{
            dispatch({
                type: types.DELETE_HERO,
                payload: res.data
            })
        })
        .catch((e)=>{
            console.log('failed to delete Hero')
            console.log(e)
        })
}

const updateHero = (hero, history) => async (dispatch)=>{
    return await axios.put(`/api/heroes/${hero.id}`, hero)
        .then(res=>{
            dispatch({
                type: types.UPDATE_HERO,
                payload: res.data
            })
            history.push('/heroes')
        })
        .catch((e)=>{
            console.log('failed to update Hero')
            console.log(e)
        })
} 
        
const updateTeam = (id, teamName, logo, history) => async (dispatch)=>{
    const updatedTeam= {id, teamName, logo }
    return axios.put(`/api/teams/${id}`, updatedTeam)
    .then(res=>{
        dispatch({
            type: types.UPDATE_TEAM,
            payload: res.data
        })
        history.push('/teams')
    })
    .catch((e)=>{
        console.log('failed to update Team')
        console.log(e)
    })
}

module.exports={
    getTeams,
    getHeroes,
    updateHero,
    updateTeam,
    deleteHero,
    deleteTeam,
    addHero,
    addTeam,
    sort
}