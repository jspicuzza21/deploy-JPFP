import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunks from 'redux-thunk';
import types from './types';

const initialState={
  teams: [],
  team:'',
  heroes:[],
  hero:''
}

const teamsReducer = (state = initialState, action)=> {
  switch(action.type){
    case types.GET_TEAMS:
      return {
        ...state,
        teams: action.payload
      };
    case types.ADD_TEAM:
      return {
        ...state,
        teams: action.payload
      };
    case types.UPDATE_TEAM:
      return {
        ...state,
        teams: action.payload
      };
    case types.DELETE_TEAM:
      
      return {
        ...state,
        teams: action.payload.teams,
        heroes: action.payload.heroes
      }
    default: return state;
  }
};

const heroesReducer = (state = initialState, action)=> {
  switch(action.type){
    case types.GET_HEROES:
      return {
        ...state,
        heroes: action.payload
      };
    case types.ADD_HER0:
      return {
        ...state,
        heroes: action.payload
      };
    case types.UPDATE_HERO:
      return {
        ...state,
        heroes:action.payload
      };
    case types.DELETE_HERO:
      return {
        ...state,
        heroes: action.payload
      };
    case types.DELETE_HEROES:
      console.log(action.payload)
      return {
        ...state,
        hero: action.payload
      }
    default: return state;
  }
};

const reducer = combineReducers({
  teams: teamsReducer,
  heroes: heroesReducer
});

const store = createStore(reducer, applyMiddleware(thunks));

export default store;
