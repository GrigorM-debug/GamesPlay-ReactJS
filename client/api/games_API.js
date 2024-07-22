import * as requester from './requester';

const baseURL = 'http://localhost:3030/jsonstore/games';

async function getAll() {
    const result = await requester.get(baseURL);

    const games = Object.values(result);

    console.log(games)

    return games;
}




const gamesApi = {
    getAll
}

export default gamesApi;