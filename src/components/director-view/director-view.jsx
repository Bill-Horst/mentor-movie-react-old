import React from 'react';
import { Link } from 'react-router-dom';
import './director-view.scss';

export class DirectorView extends React.Component {

    constructor() {
        super();

        this.state = {};
    }

    render() {
        const { director, directorMovies } = this.props;

        if (!director) return null;

        return (
            <div className="director-view">
                <div className="director-name">
                    <div className="label">Name</div>
                    <div className="value">{director.Name}</div>
                </div>
                <div className="director-bio">
                    <div className="label">Bio</div>
                    <div className="value">{director.Bio}</div>
                </div>
                <div className="director-birth">
                    <div className="label">Birth date</div>
                    <div className="value">{director.Birth}</div>
                </div>
                <div className="director-death">
                    <div className="label">Death date</div>
                    <div className="value">{director.Death}</div>
                </div>
                <div className="director-movies">
                    <div className="label">Movies</div>
                    <div className="value">{directorMovies.map(m => <p key={m._id}>
                        <Link to={`/movies/${m._id}`}>
                            {m.Title}
                        </Link>
                    </p>)}</div>
                </div>
            </div>
        );
    }
}