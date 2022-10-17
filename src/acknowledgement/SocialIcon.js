import React from 'react';
import PropTypes from 'prop-types';

class SocialIcon extends React.Component {
    render() {
        const {
            iconName,
            socialURL,
        } = this.props;

        return (
            <span>
                <a href={socialURL} aria-label={iconName}>
                    <span className={`fab fa-${iconName} text-blue-700 px-0.5`} />
                </a>
            </span>
        );
    }
}

SocialIcon.propTypes = {
    iconName: PropTypes.string.isRequired,
    socialURL: PropTypes.string.isRequired,
};

export default SocialIcon;
