import React from 'react';
import { Link } from 'react-router-dom';
import ContributorHeader from './ContributorHeader';
import ProjectURLs from './ProjectURLs';
import contributors from '../data/contributors.json';

class Acknowledgement extends React.Component {
    render() {
        return (
            <div className="flex flex-col items-center text-center">
                <div>Tracker by</div>
                <div>
                    {
                        contributors.creators.map((creator) => (
                            <ContributorHeader
                                name={creator.name}
                                urls={creator.urls}
                                key={creator.name}
                            />
                        ))
                    }
                </div>
                <div>Additional contributions by</div>
                <div className="container flex flex-wrap justify-center gap-2">
                    {
                        contributors.contributors.map((contributor) => (
                            <ContributorHeader
                                name={contributor.name}
                                urls={contributor.urls}
                                key={contributor.name}
                            />
                        ))
                    }
                </div>
                <ProjectURLs />
                <Link to="/acknowledgement">Full Acknowledgement</Link>
            </div>
        );
    }
}

export default Acknowledgement;
