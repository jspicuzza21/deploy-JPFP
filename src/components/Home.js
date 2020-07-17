import React, { Component } from 'react';
import NavBar from './Nav';

class Home extends Component {
    constructor(){
        super()

    }

    render(){
        return(
            <div>
                <NavBar/>
                <h1 className="title page-title">Welcome to the SuperHero Teams Database</h1>
                <img src='https://homefinder.com.my/wp-content/uploads/2016/03/marvel_superheroes.jpg' className='home-photo'/>
                <div className='footer'>
                    <h5>Created by Joe Spicuzza at Fullstack Academy</h5>
                </div>
            </div>
        )
    }
}

export default Home;