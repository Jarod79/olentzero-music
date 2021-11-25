import React, {useState} from "react";
import "./cardslist.css";
import Card from "./Card";
import calendar from "../data";

const CardsList = () => {
    const [playing, setPlaying] = useState(0);

    console.log(calendar[0].url);
    return (
        <div className="cardsGrid">
        {calendar.map((day, index) => (
            <Card
            key={index}
            number={day.number}
            image={day.image}
            track={day.url}
            setPlaying={setPlaying}
            playing={playing}
            />
        ))}
        </div>
    );
};

export default CardsList;
