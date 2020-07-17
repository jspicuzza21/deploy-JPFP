import React, { Component } from 'react';
import NavBar from './Nav';
import { connect } from 'react-redux';
import { getHeroes, getTeams } from '../Redux/actions';

class StrongestTeam extends Component {
    constructor(){
        super()

    }
    componentDidMount(){
        this.props.getTeams();
        this.props.getHeroes();
    }

    render(){
        const { heroes } = this.props.heroes;
        const teamLevels = heroes.reduce((accum, currentHero)=>{
            if (accum[currentHero.TeamId]){
                accum[currentHero.TeamId]=currentHero.powerLevel+accum[currentHero.TeamId];
            } else {
                accum[currentHero.TeamId]=currentHero.powerLevel;
            }
            return accum
        },{})
        const teamLevelsArr=(Object.entries(teamLevels)).sort((a,b)=> a[1]>b[1] ? -1 : 1)[0];
        const teamMembers=heroes.filter(hero=>hero.TeamId===teamLevelsArr[0]);
        
        return(
            <div>
                <NavBar/>
                <h1 className='title page-title'>Strongest Team</h1>
                <div style={{display:'flex', justifyContent:'center'}}>
                    {
                        teamLevelsArr &&
                        <div className='team-container' style={{width: '33%'}}>
                            <h2 className='title'>{teamMembers[0].team}</h2>
                            <h3 className='subtitle'>Total Power Rating: {teamLevelsArr[1]}</h3>
                            <h4 className='subtitle'>Average Power Rating: {Math.floor(teamLevelsArr[1]/teamMembers.length)}</h4>
                            <table className='table'>
                                <thead>
                                    <tr>
                                        <th className='thead'>Alias</th>
                                        <th className='thead'>Power Rating</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {teamMembers.map(hero=> {
                                    return (
                                        <tr key={hero.id}>
                                            <td>{hero.alias}</td>
                                            <td>{hero.powerLevel}</td>
                                        </tr>
                                    )
                                })}
                                </tbody>
                            </table>
                        </div>
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      teams: state.teams,
      team: state.team,
      heroes: state.heroes,
    }
  }

export default connect(mapStateToProps, {getHeroes, getTeams})(StrongestTeam);