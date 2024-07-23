export default function CommentItem({
    username,
    content
}) {
    return (
        <li className="comment">
            <p>Creator: {username}</p>
            <p>Content: {content}</p>
        </li>
    );
};