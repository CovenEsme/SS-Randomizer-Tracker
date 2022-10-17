import React from 'react';
import PropTypes from 'prop-types';
import SocialIcon from './SocialIcon';

class ContributorHeader extends React.Component {
    render() {
        const {
            name,
            urls,
        } = this.props;

        return (
            <div>
                <span className="font-bold">
                    {name}
                </span>
                {
                    Object.entries(urls).map((entry) => (
                        <SocialIcon iconName={entry[0]} socialURL={entry[1]} />
                    ))
                }
            </div>
        );
    }
}

ContributorHeader.propTypes = {
    name: PropTypes.string.isRequired,
    urls: PropTypes.arrayOf(PropTypes.shape({
        img: PropTypes.string,
        link: PropTypes.string,
    })).isRequired,
};

export default ContributorHeader;
