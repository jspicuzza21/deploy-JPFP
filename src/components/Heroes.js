import React, { Component } from 'react';
import NavBar from './Nav';
import { connect } from 'react-redux';
import { getHeroes, getTeams, deleteHero, sort} from '../Redux/actions';
import HeroForm from './HeroForm';
import axios from 'axios';

class HeroesPage extends Component {
    constructor(){
        super()
        this.state ={}
        this.handleSort = this.handleSort.bind(this);
    }

    async componentDidMount(){
      await this.props.getTeams();
      await this.props.getHeroes();
    }

    handleSort(e){
      this.props.sort(e.target.value);
    }

    render(){
      const { heroes } = this.props;
        return(
            <div>
                <NavBar/>
                <h1 className='title page-title'>Super Heroes</h1>
                <HeroForm/>
                <div style={{textAlign:'left', marginLeft:'12%'}}>
                  <label className='label'>
                    Sort By: 
                    <select onChange={this.handleSort} className='select'>
                      <option>-- Select --</option>
                      <option>Power</option>
                      <option>Power Reverse</option>
                      <option>Alias</option>
                      <option>Alias Reverse</option>
                    </select>
                  </label>
                </div>
                <div className='teams-container'>
                        { heroes &&
                            heroes.map(hero=>{
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
      hero: state.hero,
      newHero: state.heroes.hero
    }
  }


export default connect(mapStateToProps,{getHeroes, getTeams, deleteHero, sort})(HeroesPage);

//export default HeroesPage;