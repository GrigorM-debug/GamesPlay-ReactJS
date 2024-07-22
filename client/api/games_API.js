import * as requester from './requester';

const baseURL = 'http://localhost:3030/jsonstore/games';

async function getAll() {
    const result = await requester.get(baseURL);

    const games = Object.values(result);

    // console.log(games)

    return games;
}

async function getOne(gameId) {
    const game = await requester.get(`${baseURL}/${gameId}`);

    return game;
}



const gamesApi = {
    getAll,
    getOne
}

export default gamesApi;