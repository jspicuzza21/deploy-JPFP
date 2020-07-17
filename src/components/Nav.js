import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {getTeams, getHeroes} from '../Redux/actions';
import store from '../Redux/store'

class NavBar extends Component {
    constructor(){
        super()

    }
    async componentDidMount(){
        await this.props.getHeroes();
        await this.props.getTeams();
    }

    render(){
        const { teams, heroes } = this.props;
        return(
            <div>
                <nav className="navbar is-link" role="navigation" aria-label="main navigation">
                    <div className="navbar-brand">
                        <Link to ='/' className="navbar-item">Home</Link >
                        <Link to ='/teams' className="navbar-item">Teams ({teams.length})</Link>
                        <Link to ='/heroes'className="navbar-item">Heroes ({heroes.length})</Link>
                        <Link to ='/largest' className="navbar-item">Biggest Team</Link>
                        <Link to ='/strongest' className="navbar-item">Strongest Team</Link>
                    </div>
                </nav>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
      teams: state.teams.teams,
      heroes: state.heroes.heroes,
    }
  }


export default connect(mapStateToProps,{getHeroes, getTeams})(NavBar)