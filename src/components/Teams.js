import React, { Component } from 'react';
import NavBar from './Nav';
import { connect } from 'react-redux';
import { getHeroes, getTeams, deleteTeam, updateHero} from '../Redux/actions';
import TeamForm from './teamForm';
import { Link } from 'react-router-dom';

class TeamsPage extends Component {
    constructor(){
        super()
        this.state={
            heroName:'',
        }
        this.handleInput = this.handleInput.bind(this);
    }

    componentDidMount(){
        this.props.getTeams()
        this.props.getHeroes()
    }

    async handleInput(e){
        const teamId= e.target.id;
        await this.setState({ [e.target.name]: e.target.options[e.target.selectedIndex].id});
        const team= this.props.teams.teams.find(team=> team.id === teamId);
        const updateHero = await this.props.heroes.heroes.find(hero=>hero.id===this.state.heroId);
        const { alias, name, powerLevel, id } = updateHero;
        
        const updatedHero={
            id,
            alias,
            name,
            powerLevel,
            team: team.teamName,
            TeamId: team.id
        }
        this.props.updateHero(updatedHero);
    }

    render(){
        const { teams, heroes} = this.props;
        return(
            <div>
                <NavBar/>
                <h1 className='title page-title'>Teams</h1>
                <TeamForm/>
                    <div className='teams-container'>
                        {teams.teams.map(team=>{
                            const heroList = (heroes.heroes.filter(hero => hero.TeamId === team.id))
                            return (
                                <div key={team.id} className='team-container'>
                                    <div className='logo-container' style={{backgroundImage: `url(${team.logo})`, backgroundSize: 'contain'}}>
                                    </div>
                                    <Link to = {`/team/${team.id}`} className='title tag is-white is-large'>{team.teamName}</Link >
                                    <div>
                                        <table className='table'>
                                            <thead>
                                                <tr>
                                                    <th className='thead'>Alias</th>
                                                    <th className='thead'>Power Rating</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                            {heroList.map(hero => {
                                                return (
                                                <tr key={hero.alias}>
                                                    <td>{hero.alias}</td>
                                                    <td key={hero.powerLevel}>{hero.powerLevel}</td>
                                                </tr>)
                                            })} 
                                            </tbody>                                           
                                        </table>
                                    </div>
                                    <div>
                                        <button className='button is-primary is-outlined' onClick={()=> window.location.hash=`#/team/edit/${team.id}`} style={{marginRight:'5px'}}>Edit</button>
                                        <button className='button is-danger is-outlined' name='delete' onClick={async ()=>{
                                            await this.props.deleteTeam(team.id)
                                            this.props.getHeroes()
                                        }}>Delete</button>
                                        <select className='select' name='heroId' id={team.id} onChange={this.handleInput} style={{marginTop:'7px'}}>
                                            <option>Add Hero</option>
                                            {heroes.heroes.map( hero => <option key={hero.id} id={hero.id}> {hero.alias} </option>)}
                                        </select>
                                    </div>
                                </div>
                            )
                        })}
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
      hero: state.hero
    }
  }
export default connect(mapStateToProps, { getTeams, getHeroes, deleteTeam, updateHero })(TeamsPage);
