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

async function createGameComment(gameId, newComment) {
    // console.log(newComment);
    const result = await requester.post(`${baseURL}/${gameId}/comments`, newComment)

    return result;
}


const gamesApi = {
    getAll,
    getOne,
    createGameComment
}

export default gamesApi;