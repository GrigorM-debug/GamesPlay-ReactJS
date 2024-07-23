import { useEffect, useState } from "react";
import gamesApi from '../../../api/games_API';
import { useParams } from "react-router-dom";
import CommentItem from "./comment-Item/CommentItem";

export default function GameDetails() {
    const [game, setGame] = useState({});
    const {gameId} = useParams();

    const [username, setUsername] = useState('');
    const [content, setContent] = useState('');
    const [newComment, setNewComment] = useState(null)
    // console.log(gameId)

    useEffect(() => {
        (async () => {
            const result = await gamesApi.getOne(gameId);

            setGame(result);
            // console.log(result)
        })()
    }, []);


    const handleFormSubmit = async (e) => {
        e.preventDefault();

        const newComment = {
            username,
            content
        }
        setNewComment(newComment)
        // console.log(newComment)

        const createdComment = await gamesApi.createGameComment(gameId, newComment);

        setGame(oldState => ({
            ...oldState,
            comments: {
                ...oldState.comments,
                createdComment
            }
        }));

        setNewComment(null);

        setUsername('');
        setContent('');
    }


    return (
        <section id="game-details">
            <h1>Game Details</h1>
            <div className="info-section">

                <div className="game-header">
                    <img className="game-img" src={game.imageUrl} />
                    <h1>Bright</h1>
                    <span className="levels">{game.level}</span>
                    <p className="type">{game.category}</p>
                </div>

                <p className="text">{game.description}</p>

                {/* <!-- Bonus ( for Guests and Users ) --> */}
                <div className="details-comments">
                    <h2>Comments:</h2>
                    <ul>
                        {/* <!-- list all comments for current game (If any) --> */}
                        {Object.keys(game.comments || {}).length > 0
                            ? Object.values(game.comments).map(gc => <CommentItem key={gc._id} username={gc.username} content={gc.content}/>)
                            : <p className="no-comment">No comments.</p>
                        }
                    </ul>
                </div>

                {/* <!-- Edit/Delete buttons ( Only for creator of this game )  --> */}
                <div className="buttons">
                    <a href="#" className="button">Edit</a>
                    <a href="#" className="button">Delete</a>
                </div>
            </div>

            {/* <!-- Bonus --> */}
            {/* <!-- Add Comment ( Only for logged-in users, which is not creators of the current game ) --> */}
            <article className="create-comment">
                <label>Add new comment:</label>
                <form className="form" onSubmit={handleFormSubmit}>
                    <textarea name="username" placeholder="Username......" onChange={(e) => setUsername(e.target.value)} value={username}/>
                    <textarea name="comment" placeholder="Comment......" onChange={(e) => setContent(e.target.value)} value={content}></textarea>
                    <input className="btn submit" type="submit" value="Add Comment" />
                </form>
            </article>

        </section>
    );
};