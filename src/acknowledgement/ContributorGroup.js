import React from 'react';
import PropTypes from 'prop-types';
import Contributor from './Contributor';

class ContributorGroup extends React.Component {
    render() {
        const {
            contributorsList,
        } = this.props;

        return (
            <div className="container flex flex-wrap justify-center gap-2">
                {
                    contributorsList.map((contributor) => (
                        <Contributor
                            className="flex flex-col flex-wrap bg-stone-200 rounded-sm border-4 border-black p-2 m-2"
                            name={contributor.name}
                            urls={contributor.urls}
                            attributions={contributor.attributions}
                            key={contributor.name}
                        />
                    ))
                }
            </div>
        );
    }
}

ContributorGroup.propTypes = {
    contributorsList: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ContributorGroup;
