import React from "react";
import {Image} from "./StyledWidgets";
import './StarWars.css';

export default function CharCard({name,homeworld,films}) {
    return (
        <div className = "char-card">
            <Image src="https://freedesignfile.com/upload/2017/08/astronaut-icon-vector.png"/>
            <div className = "card-text">
                <h2>{name}</h2>
                <p>Homeworld: <a href={homeworld}>{homeworld}</a></p>
                <ol>{films.forEach(film => {return <li>{film}</li>})}</ol>
            </div>
        </div>
    );
}




