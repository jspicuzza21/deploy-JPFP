import React, { Component } from 'react';
import NavBar from './Nav';
import { connect } from 'react-redux';
import { getHeroes, updateHero, getTeams} from '../Redux/actions';

class EditHero extends Component {
    constructor(){
        super()
        this.state = {
          id:'',
          alias:'',
          name:'',
          powerLevel:'',
          team:'',
          TeamId:''
        }
        this.handleInput = this.handleInput.bind(this);
    }

    async componentDidMount(){
      await this.props.getHeroes();
      await this.props.getTeams();
      const { heroes } = this.props
      const heroId= this.props.match.params.id
      const hero=heroes.find(hero=>hero.id===heroId)
        this.setState({
          id: hero.id,
          alias:hero.alias,
          name: hero.name,
          powerLevel: hero.powerLevel,
          team: hero.team,
        })
        this.handleInput = this.handleInput.bind(this);
    }
    
    handleInput(e){
      this.setState({
        team: e.target.value,
        TeamId: e.target.options[e.target.selectedIndex].id
      })
    }

    render(){
      const { id, alias, name, powerLevel, team, TeamId } = this.state
      const { history } = this.props;
      const updatedHero={
        id,
        alias, 
        name, 
        powerLevel,
        team,
        TeamId
      }

      return (
        <div>
            <NavBar/>
            <h1 className='title page-title'>Edit</h1>
            <div className='form-container form'>
                <label className="label">
                    Alias:
                    <input value={this.state.alias} onChange={(e)=> this.setState({ alias: e.target.value })} className="input is-hovered"></input>
                </label>
                <label className="label">
                      Name:
                    <input value={this.state.name} onChange={(e)=> this.setState({ name: e.target.value })} className="input is-hovered"></input>
                </label>
                <label className="label">
                      Power Level (0-100):
                    <input value={this.state.powerLevel} onChange={(e)=> this.setState({ powerLevel: e.target.value })} className="input is-hovered"></input>
                </label>
                <label className="label">
                      Team:
                      <select onChange={this.handleInput} className='select'>
                        <option>--Select Team --</option>
                        {this.props.teams.map(team=> <option key={team.id} id={team.id}>{team.teamName}</option>)}
                      </select>
                </label>
            </div>
            <button onClick={()=> this.props.updateHero(updatedHero, history)} className='button is-danger is-outlined' style={{marginTop:'20px'}}>Save Changes</button>
        </div>
        )
    }
}
  const mapStateToProps = (state) => {
    return {
      teams: state.teams.teams,
      heroes: state.heroes.heroes,
      hero: state.hero,
    }
  }
export default connect(mapStateToProps,{getHeroes, updateHero, getTeams})(EditHero);