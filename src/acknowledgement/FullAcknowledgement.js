import React from 'react';
import { Link } from 'react-router-dom';
import ContributorGroup from './ContributorGroup';
import contributors from '../data/contributors.json';
import ProjectURLs from './ProjectURLs';

class FullAcknowledgement extends React.Component {
    render() {
        return (
            <div className="flex flex-col items-center text-center">
                <h1 className="font-extrabold text-3xl">Lead Developer</h1>
                <ContributorGroup contributorsList={contributors.creators} />

                <h2 className="font-extrabold text-2xl">Contributors</h2>
                <ContributorGroup contributorsList={contributors.contributors} />

                <h2 className="font-extrabold text-2xl">Additional Shoutouts</h2>
                <ContributorGroup contributorsList={contributors.additionalShoutouts} />

                <ProjectURLs />
                <Link className="underline" to="/">Return to Tracker</Link>
            </div>
        );
    }
}

export default FullAcknowledgement;
