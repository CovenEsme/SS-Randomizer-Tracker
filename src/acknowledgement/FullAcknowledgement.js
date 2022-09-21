import React from 'react';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import Contributor from '../additionalComponents/Contributor';
import ImageLink from '../additionalComponents/ImageLink';
import contributors from '../data/contributors.json';

class FullAcknowledgement extends React.Component {
    // eslint-disable-next-line class-methods-use-this
    makeContributorTable(contributorsList) {
        return _.map(contributorsList, (contributor) => (
            <div className="p-4">
                <div className="font-semibold">
                    <Contributor name={contributor.name} links={contributor.links} />
                </div>
                {
                    _.map(contributor.attributions, (attribution) => (
                        <div>
                            <span>•</span>
                            {attribution}
                        </div>
                    ))
                }
            </div>
        ));
    }

    render() {
        return (
            <div className="flex flex-col items-center text-center">
                <div className="bg-stone-300 rounded-md border-4 border-black p-2 m-2">
                    <div className="font-bold text-lg">
                        Lead Developer
                    </div>
                    <div>
                        { this.makeContributorTable(contributors.creators) }
                    </div>
                </div>
                <div className="bg-stone-300 rounded-md border-4 border-black p-2 m-2">
                    <div className="font-bold text-lg">
                        Contributors
                    </div>
                    <div className="flex flex-row flex-wrap justify-center">
                        { this.makeContributorTable(contributors.contributors) }
                    </div>
                </div>
                <div className="bg-stone-300 rounded-md border-4 border-black p-2 m-2">
                    <div className="font-bold text-lg">
                        Additional Shoutouts
                    </div>
                    <div className="flex flex-row flex-wrap justify-center">
                        { this.makeContributorTable(contributors.additionalShoutouts) }
                    </div>
                </div>
                <div className="bg-stone-300 rounded-md border-4 border-black p-2 m-2">
                    <div className="m-2">
                        <a href="https://github.com/cjs8487/SS-Randomizer-Tracker" className="underline">
                            View the Source Code
                            <span className="fab fa-github text-blue-700 px-1" />
                        </a>
                    </div>
                    <div className="flex justify-center m-2">
                        <ImageLink
                            href="https://discord.gg/evpNKkaaw6"
                            src="https://discordapp.com/api/guilds/767090759773323264/embed.png?style=shield"
                            alt="Discord Embed"
                        />
                    </div>
                </div>
                <div className="bg-stone-300 rounded-md border-4 border-black p-2 m-2">
                    <Link className="underline" to="/">Return to Tracker</Link>
                </div>
            </div>
        );
    }
}

export default FullAcknowledgement;
