import React, { useState } from "react";
import lightLogo from "../img/logo-light.jpg";
import darkLogo from "../img/logo-dark.png";
import initialMessage from "../img/initial-message.jpg"

export function FullPage () {
    
    const [mode, setMode] = useState(false);
    
    function changeMode () {
        setMode(prevState => (!prevState))
    }

    let ilumination;

    if (mode === false)
    {
        ilumination = "light";
    }
    else {
        ilumination = "dark";
    }

    let logo;

    if (mode === false)
    {
        logo = lightLogo;
    }
    else {
        logo = darkLogo;
    }

    let background;

    if (mode === false)
    {
        background = "backgroundLight";
    }
    else {
        background = "backgroundDark";
    }

    let randomNumber;

    randomNumber = Math.floor(Math.random() * 30);

    let dataUrl = `https://akabab.github.io/starwars-api/api/id/${randomNumber}.json`

    const [info, setInfo] = useState({name: "", image: initialMessage});

    const [showName, setShowName] = useState(false);

    function starWarsCharacter () {
        setShowName(true)
        fetch(dataUrl)
        .then(res => res.json())
        .then(data => setInfo({name: data.name, image: data.image}))
    }

    return(
        <div className={background}>
            <nav className={ilumination}>
                <img src={logo} alt="Logo" className="logo"/>
                <section className="toggle">
                    <p>Dark-mode</p>
                    <label className="switchButton">
                        <input type="checkbox" className="choose" onChange={changeMode}/>
                    </label>
                </section>
            </nav>
            <main>
                <button type="button" className="character" onClick={starWarsCharacter}>Choose a character</button>
                {showName && <h3 className={ilumination}>{`Your character is: ${info.name}`}</h3>}
                <img src={info.image} alt="Star Wars character"></img>
            </main>
        </div>
    )
}