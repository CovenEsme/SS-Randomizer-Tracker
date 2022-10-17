import React from 'react';
import ImageLink from './ImageLink';

class ProjectURLs extends React.Component {
    render() {
        return (
            <div className="flex flex-row items-center mt-3">
                <ImageLink
                    href="https://github.com/cjs8487/SS-Randomizer-Tracker"
                    src="https://img.shields.io/github/package-json/v/cjs8487/SS-Randomizer-Tracker?logo=github"
                    alt="Github Embed"
                />
                <ImageLink
                    href="https://discord.gg/evpNKkaaw6"
                    src="https://discordapp.com/api/guilds/767090759773323264/embed.png?style=shield"
                    alt="Discord Embed"
                />
            </div>
        );
    }
}

export default ProjectURLs;
