import React, {useState, useEffect} from 'react';
import api from '../api'
import axios from 'axios';

const Test = () => {
    const [games, setGames] = useState([])


    useEffect(() => {
        const fetchData = async () => {
            const results = await api.get('https://api.twitch.tv/helix/games/top')
            //console.log(results.data)

            setGames(results.data.data)
        }
        fetchData();
    })

    return (
        <div>
            {
                games.map((game) => (
                    <div>{game.name}</div>
                ))
            }
        </div>
    );
};

export default Test;
