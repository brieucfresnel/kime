import React, { useState, useEffect } from 'react';
import RoundBackground from '../../components/RoundBackground.js';
import Header from '../../components/Header.js';
import Loading from '../../components/Loading';

const KidChoice = props => {
    const [kids, setKids] = useState([]);

    let hardcoded_kids = [
        {id:2, name:"Jérôme", avatar:"avatar-07.svg"},
        {id:8, name:"Marie", avatar:"avatar-12.svg"}
    ]

    useEffect(() => {
        setKids(JSON.parse(localStorage.getItem('childrenData')).children);
    }, [])

    console.log(kids);

    if(Object.keys(kids).length > 0) {
        return (
            <div className="container yellow background page-kid-choice">
                <Header title="Qui es-tu ?" subtitle="Choisis ton compagnon !" color="yellow" imageUrl="/img/kid-choice-img-01.svg"/>
                <div className="container__body">
                    <div className="content flex-grow">
                        <div className="page-kid-choice__choix">
                                {Object.keys(kids).map((kid,index) => {
                                    return (
                                        <a className="page-kid-choice__choix__kid" href='/accueil' key={index}>
                                            <div className="page-kid-choice__choix__kid__background">
                                                <img className="page-kid-choice__choix__kid__background__img" src={'/img/avatars/'+ kid.avatar} alt="Avatar de l'enfant" />
                                                <RoundBackground color="yellow" shadow={true}/>
                                            </div>
                                            <div className="page-kid-choice__choix__kid__text">
                                                <h1 className="page-kid-choice__choix__kid__text__title">{kid.name}</h1>
                                            </div>
                                        </a>
                                    )
                                })
                                }
                        </div>
                    </div>
                </div>
            </div>
        );
    } else {
        return <Loading />;
    }
}

export default KidChoice;