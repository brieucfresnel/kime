import React, { useState, useEffect } from 'react';
import RoundBackground from './RoundBackground.js';
import Loading from '../components/Loading';
import axios from 'axios';

function TrophiesGrid(props) {

    const [trophies, setTrophies] = useState([])
    const [kidTrophies, setKidTrophies] = useState([]);

    useEffect(() => {
        // Get all trophies
        axios.get('/api/trophies/all')
        .then(json => {
            if(json.data.data) {
                setTrophies(json.data.data);
            }
        })

        // Get unlocked trophies
        let currentKid = JSON.parse(sessionStorage.getItem('currentKid'));
        let kidId = 0;
        if(currentKid) {
            kidId = currentKid.id;
        }
        
        axios.get('/api/kid/trophies/' + kidId)
        .then(json => {
            if(json.data.success) {
                setKidTrophies(json.data.trophies);
            }
        })
    }, [])

    const handleClick = e => {
        e.preventDefault();
        let info = e.currentTarget;
        let img = $('.info-bubble__img', info).attr('src');
        let title = $('.info-bubble__title', info).text();
        let subtitle = $('.info-bubble__subtitle', info).text();
        console.log(title)

        $('#info-bubble__img').attr('src', img);
        $('#info-bubble__title').text(title);
        $('#info-bubble__subtitle').text(subtitle);

        if (info.classList.contains('locked') == true) {
            $('#info-bubble').addClass('locked');
        } else if (info.classList.contains('unlocked') == true) {
            $('#info-bubble').addClass('unlocked');
        }

        $('#info-bubble__title').css('display', "block");
        $('#info-bubble__subtitle').css('display', "block");
        $('#info-bubble__img').css('display', "block");
        $('#info-bubble').css('display','flex');
    }

    

    if(Object.keys(trophies).length > 0) {
        return (
            <section className="trophies-grid">
                {trophies.map((trophy,index) => {
                    let lockedClass = "locked"
                    if(kidTrophies[index] && trophy.id == kidTrophies[index].id)  {
                        lockedClass = "unlocked";
                    }

    
                    return (
                        <div className={"trophies-grid__trophy " +lockedClass+ " info-bubble__info " + trophy.color} key={index} onClick={handleClick}>
                            <img className="trophies-grid__trophy__img info-bubble__img" src={'/img/trophies/'+trophy.img} alt={trophy.name} />
                            <div className="trophies-grid__trophy__background"></div>
    
                            <div className="trophies-grid__trophy__infos">
                                <h1 className="trophies-grid__trophy__title info-bubble__title">{trophy.name}</h1>
                                <p className="trophies-grid__trophy__subtitle info-bubble__subtitle">{trophy.text}</p>
                            </div>
                        </div>
                    )
                })
                }
            </section>
        ) 
    } else {
        return <Loading />;
    }
}

export default TrophiesGrid;