import React, {useState, useContext} from 'react';
import Navigation from '../../components/Navigation';
import AvatarsGrid from '../../components/AvatarsGrid.js';

function Trophies() {
    let kidScore = 0;
    let avatars = [
        {id:2, img:"/img/avatar-11.svg", minScore: 0}, 
        {id:7, img:"/img/avatar-10.svg", minScore: 0}, 
        {id:0, img:"/img/avatar-08.svg", minScore: 0},
        {id:7, img:"/img/avatar-03.svg", minScore: 2}, 
        {id:10, img:"/img/avatar-07.svg", minScore: 0}
    ];

    return (
        <div className="container background">
            <div className="container__body">
                <div className="content">
                        Hello from Trophies
                        <AvatarsGrid avatars={avatars} score={kidScore} displayUnlocked={true} />
                        <Navigation page="home" />
                </div>
            </div>
        </div>
    )

}

export default Trophies;
