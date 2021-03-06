import React from 'react';
import RoundBackground from './RoundBackground.js';

function CreationsKid(props) {
    let kid = props.kid
    let gridClass = "";
    let nbCreations = 0;
    return (
        <div className="creations-kid">

            {props.activities.map((activity,index) => {
                nbCreations = activity.creations.length;
                gridClass = "g" + nbCreations;
                return (
                    <a className="creations-kid__creation" href={"/creation/" + activity.id} key={index}>
                        <div className={"creations-kid__creation__imgs " + gridClass}>
                            {activity.creations.map((creation,index) => {
                                return (
                                    <div className={"creations-kid__creation__imgs__img img" + index}  key={index}>
                                        <img src={"/img/creations/"+creation.img} />
                                    </div>
                                )
                            })
                            }
                            <div className={"creations-kid__infos " + activity.color}>
                                <img className="creations-kid__infos__img" src={"/img/sub_categories/"+activity.img} />
                                <p className="creations-kid__infos__title">{activity.name}</p>
                            </div>
                        </div>
                    </a>
                )
            })
            }

        </div>
    );
}

export default CreationsKid;