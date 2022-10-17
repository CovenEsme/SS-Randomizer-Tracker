import React from 'react';
import PropTypes from 'prop-types';
import ContributorHeader from './ContributorHeader';

class Contributor extends React.Component {
    render() {
        const {
            name,
            urls,
            attributions,
            className,
        } = this.props;

        return (
            <div className={className}>
                <ContributorHeader
                    name={name}
                    urls={urls}
                />
                <div>
                    {
                        attributions.map((attribution) => (
                            <div key={attribution}>
                                {attribution}
                            </div>
                        ))
                    }
                </div>
            </div>
        );
    }
}

Contributor.propTypes = {
    name: PropTypes.string.isRequired,
    urls: PropTypes.arrayOf(PropTypes.shape({
        img: PropTypes.string,
        link: PropTypes.string,
    })).isRequired,
    attributions: PropTypes.arrayOf(PropTypes.string).isRequired,
    className: PropTypes.string.isRequired,
};

export default Contributor;
