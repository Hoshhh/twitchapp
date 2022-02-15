import React, {useState, useEffect} from 'react';
import api from '../api'
import axios from 'axios';

const Test = () => {
    // const [games, setGames] = useState([])
    const [search, setSearch] = useState('')
    const [searchResults, setSearchResults] = useState([])
    const [showResults, setShowResults] = useState(false)
    const [streamId, setStreamId] = useState('')


    // useEffect(() => {
    //     const fetchData = async () => {
    //         const results = await api.get('https://api.twitch.tv/helix/games/top')
    //         //console.log(results.data)

    //         setGames(results.data.data)
    //     }
    //     fetchData();
    //      <iframe src="https://player.twitch.tv/?channel=26261471&parent=localhost" frameborder="0" title="test"></iframe>
    // })

    useEffect(() => {
        const fetchStreams = async () => {
            const results = await api.get('https://api.twitch.tv/helix/search/channels' + search)
            console.log(results.data)

            setSearchResults(results.data.data)
        }
        fetchStreams();
    }, [search])


    return (
        <div>
            <input type="text" 
            placeholder='Search for Channels...' 
            onFocus={() => setShowResults(true)} 
            onBlur={() => setShowResults(false)}
            onChange={event => {setSearch('?query=' + event.target.value)}} />
            {
                searchResults.map((result) => (
                    <div>
                        { showResults &&
                            result.broadcaster_login
                        }
                    </div>
                ))
            }
        </div>
    );
};

export default Test;
