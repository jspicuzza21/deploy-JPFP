import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getHeroes, getTeams} from '../Redux/actions';
import { addHero } from '../Redux/actions';

class HeroForm extends Component{
    constructor(){
        super()
        this.state={
            alias:'',
            name:'',
            powerLevel:'',
            team:'',
            TeamId:''
        }
        this.handleInput = this.handleInput.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleInput(e){
        this.setState({ [e.target.name]: e.target.value})
    }

    handleSubmit(e){
        e.preventDefault()
        const team=this.props.teams.teams.find(team=>team.id===this.state.team);
        if (team===undefined || this.state.alias===''){
            alert('Please add an Alias and Selected Team')
        } else {
            const newHero={
                alias: this.state.alias,
                name: this.state.name,
                powerLevel: this.state.powerLevel,
                team: team.teamName,
                TeamId: this.state.team
            }
            if(newHero.team===undefined||''){
                alert('please enter a team')
            }
            this.props.addHero(newHero)
            this.setState({
                alias:'',
                name:'',
                powerLevel:'',
                team:''
            })
        }
    }

    render(){
        const { teams } = this.props.teams
        return(
            <div className='form'>
                <form className='form-container'onSubmit={this.handleSubmit}>
                    <label className="label">
                        Hero Alias:
                        <input value={this.state.alias} name='alias' onChange={this.handleInput} className="input is-hovered"></input>
                    </label>
                    <label className="label">
                        Real Identity:
                        <input value={this.state.name} name='name' onChange={this.handleInput} className="input is-hovered"></input>
                    </label>
                    <label className="label">
                        Power Level: (0-100)
                        <input value={this.state.powerLevel} name='powerLevel' onChange={this.handleInput} className="input is-hovered"></input>
                    </label>
                    <label className="label">
                        Team:
                        <select onChange={this.handleInput} name='team' className="select">
                            <option value={this.state.team} >Select a Team</option>
                            { teams.map(team=> <option value={team.id} key={team.id}>{team.teamName}</option>) }
                        </select>
                    </label>
                    <button className='button is-link is-outlined is-large'> Create Hero </button>
                </form>
            </div>
        )
    }   
}

const mapStateToProps = (state) => {
    return {
      teams: state.teams,
      heroes: state.heroes.heroes,
      hero: state.hero
    }
  }

  export default connect(mapStateToProps, {getHeroes, getTeams, addHero})(HeroForm);