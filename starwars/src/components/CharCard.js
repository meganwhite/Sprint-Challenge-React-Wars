import React from "react";

export default function CharCard({name,homeworld}) {
    return (
        <div className = "char-card">
            <img src="https://freedesignfile.com/upload/2017/08/astronaut-icon-vector.png"/>
            <h2>{name}</h2>
            <a href={homeworld}>{homeworld}</a>
        </div>
    );
}