import { useEffect, useState } from 'react';
import gamesApi from '../../../api/games_API';
import GamesItem from './games-item/GamesItem';

export default function Games() {
    const [games, setGames] = useState([]);

    useEffect(() => {
        (async () => {
            const result = await gamesApi.getAll();
            
            setGames(result)

            // console.log(games);
        })()
    }, []);
    return (
        // <!-- Catalogue -->
        <section id="catalog-page">
            <h1>All Games</h1>
            {/* <!-- Display div: with information about every game (if any) --> */}

            {games.length > 0 
                ? games.map(game => <GamesItem key={game._id} {...game}/>)
                : <h3 className="no-articles">No articles yet</h3>
            }
        </section>
    );
};