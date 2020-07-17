import React, { Component } from 'react';
import NavBar from './Nav';
import { connect } from 'react-redux';
import TeamForm from './teamForm';
import { Link } from 'react-router-dom';
import {getHeroes, deleteHero} from '../Redux/actions';

class TeamPage extends Component {
    constructor(){
        super()
        this.state={};
    }

    async componentDidMount(){
        await this.props.getHeroes();
    }
    
    
    render(){
        const teamId= this.props.match.params.id
        const { heroes } = this.props;
        const heroArr = heroes.filter(hero=> hero.TeamId===teamId)
        return(
            <div>
                <NavBar/>
               {
                   heroArr[0] &&
                   <h1 className='title page-title'>{heroArr[0].team}</h1>
               }
                <div className='teams-container'>
                          {heroArr.map(hero=>{
                            return (
                                <div key={hero.id} className='team-container'>
                                    <h2 className='title'>{hero.alias}</h2>
                                    <table className = 'table'>
                                      <tbody>
                                          <tr>
                                              <td>Name: {hero.name}</td>
                                          </tr>
                                          <tr>
                                              <td>Power Level: {hero.powerLevel}</td>
                                          </tr>
                                          <tr>
                                              <td>Team: {hero.team}</td>
                                          </tr>
                                      </tbody>
                                    </table>
                                    <button className='button is-primary is-outlined' onClick={()=> window.location.hash=`#/hero/edit/${hero.id}`} style={{marginBottom:'5px'}}>Edit</button>
                                    <button className='button is-danger is-outlined' name='delete' onClick={()=>this.props.deleteHero(hero.id)}>Delete</button>
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
      heroes: state.heroes.heroes,
    }
  }


export default connect(mapStateToProps, { getHeroes, deleteHero})(TeamPage);
