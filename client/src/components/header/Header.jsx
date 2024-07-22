import {Link} from 'react-router-dom';

export default function Header() {
    return (
        <header>
            {/* <!-- Navigation --> */}
            <h1><Link className="home" to="#">GamesPlay</Link></h1>
            <nav>
                <Link to="#">All games</Link>
                {/* <!-- Logged-in users --> */}
                <div id="user">
                    <Link to="#">Create Game</Link>
                    <Link to="#">Logout</Link>
                </div>
                {/* <!-- Guest users --> */}
                <div id="guest">
                    <Link to="#">Login</Link>
                    <Link to="#">Register</Link>
                </div>
            </nav>
        </header>
    );
};