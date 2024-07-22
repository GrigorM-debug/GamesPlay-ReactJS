import * as requester from './requester';

const baseURL = 'http://localhost:3030/jsonstore/';

async function getAll() {
    const games = await requester.get(`${baseURL}/games`);

    return games;
}




const games_Api = {
    getAll
}

export default games_Api;