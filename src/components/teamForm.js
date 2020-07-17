import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getHeroes, getTeams} from '../Redux/actions';
import { addTeam } from '../Redux/actions';

class TeamForm extends Component{
    constructor(){
        super()
        this.state={
            teamName:'',
            logo:''
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleInput(e){
        this.setState({ [e.target.name]: e.target.value});
    }

    handleSubmit(e){
        e.preventDefault();
        if (this.state.teamName===''){
            alert('Please Enter a Team Name');
        } else {
            const newTeam={
                teamName: this.state.teamName,
                logo: this.state.logo,
            }
            this.props.addTeam(newTeam);
            this.setState({
                teamName:'',
                logo:''
            })
        }
    }

    render(){
        return(
            <div className='form'>
                <form className='form-container'onSubmit={this.handleSubmit}>
                    <label className="label">
                        Team Name:
                        <input value={this.state.teamName} name='teamName' onChange={this.handleInput} className="input is-hovered"></input>
                    </label>
                    <label className="label">
                        Logo URL:
                        <input value={this.state.logo} name='logo' onChange={this.handleInput} className="input is-hovered"></input>
                    </label>
                    <button className='button is-link is-outlined is-large'> Create Team </button>
                </form>
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

  export default connect(mapStateToProps, {getHeroes, getTeams, addTeam})(TeamForm);