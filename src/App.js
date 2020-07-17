import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from './components/Home';
import HeroesPage from './components/Heroes';
import TeamsPage from './components/Teams';
import StrongestTeam from './components/strongestTeam';
import LargestTeam from './components/biggestTeam';
import EditTeam from './components/editTeam';
import EditHero from './components/editHero';
import TeamPage from './components/team';

class App extends Component{
  constructor(){
    super();
  }
  
  render(){
    return (
      <HashRouter>
        <Switch>
          <Route exact path={'/'} component={Home}></Route>
          <Route exact path={'/heroes'} component={HeroesPage}></Route>
          <Route exact path={'/teams'} component={TeamsPage}></Route>
          <Route exact path={'/largest'} component={LargestTeam}></Route>
          <Route exact path={'/strongest'} component={StrongestTeam}></Route>
          <Route exact path={'/team/edit/:id'} component={EditTeam}></Route>
          <Route exact path={'/hero/edit/:id'} component={EditHero}></Route>
          <Route exact path={'/team/:id'} component={TeamPage}></Route>
          <Redirect to='/'></Redirect>
        </Switch>
      </HashRouter>
    );
  }
};

export default connect(null, null)(App);

