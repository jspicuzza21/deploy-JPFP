import React, { Component } from 'react';
import NavBar from './Nav';
import { connect } from 'react-redux';
import axios from 'axios';

class LargestTeam extends Component {
    constructor(){
        super()
        this.state={}
    }
    async componentDidMount(){
        await axios.get('/api/teams/largest')
        .then(res=> this.setState({teams: res.data}))
    }

    render(){
        const { teams } = this.state;
        return(
            <div>
                <NavBar/>
                <h1 className='title page-title'>Largest Team</h1>
                <div style={{display:'flex', justifyContent:'center'}}>
                    {
                        teams &&
                            teams.map(team=>{
                                return (
                                    <div className='team-container' style={{width: '33%'}} key={team[0].team}>
                                        <div>
                                            <h1 className='title'> {team[0].team}</h1>
                                            <h1 className='subtitle'> Total Members: {team.length}</h1>
                                            <table className='table'>
                                                <tbody>
                                                    {team.map(hero=>{
                                                        return (
                                                            <tr key={hero.id}>
                                                                <td>{hero.alias}</td>
                                                            </tr>
                                                        )
                                                    })}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                )
                            })
                    }
                </div> 
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      teams: state.teams.teams,
      team: state.team,
      heroes: state.heroes.heroes,
    }
  }

export default connect(mapStateToProps, {})(LargestTeam);