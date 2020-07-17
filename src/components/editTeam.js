import React, { Component } from 'react';
import NavBar from './Nav';
import { connect } from 'react-redux';
import { getTeams, updateTeam} from '../Redux/actions';

class EditTeam extends Component {
    constructor(){
        super()
        this.state = {
          id:'',
          teamName:'',
          logo:''
        }
    }

    async componentDidMount(){
      await this.props.getTeams();
      const { teams } = this.props
      const teamId= this.props.match.params.id
      const team=teams.find(team=>team.id===teamId)
        this.setState({
          id: team.id,
          teamName:team.teamName,
          logo: team.logo
        })
    }
    
    render(){
      const { id, teamName, logo } = this.state
      const { history } = this.props;
      return(
            <div>
                <NavBar/>
                <h1 className='title page-title'>Edit</h1>
                <div className='form-container form'>
                    <label className="label">
                        Name:
                        <input value={this.state.teamName} onChange={(e)=> this.setState({ teamName: e.target.value })} className="input"></input>
                    </label>
                    <label className="label">
                        Logo URL:
                        <input value={this.state.logo} onChange={(e)=> this.setState({ logo: e.target.value })} className="input"></input>
                    </label>
                </div>
                <button onClick={()=>this.props.updateTeam(id, teamName, logo, history)} className='button is-danger is-outlined' style={{marginTop:'20px'}}>Save Changes</button>

            </div>
        )
    }
}
 
  const mapStateToProps = (state) => {
    return {
      teams: state.teams.teams,
      team: state.team,
    }
  }


export default connect(mapStateToProps,{getTeams, updateTeam})(EditTeam)