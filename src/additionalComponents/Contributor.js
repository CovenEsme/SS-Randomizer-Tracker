import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

class Contributor extends React.Component {
    render() {
        return (
            <span>
                <span>
                    {this.props.name}
                </span>
                {
                    _.map(this.props.links, (link, type) => (
                        <a href={link} aria-label={type}><span className={`fab fa-${type} text-blue-700 px-0.5`} /></a>
                    ))
                }
            </span>
        );
    }
}

Contributor.propTypes = {
    name: PropTypes.string.isRequired,
    links: PropTypes.arrayOf(PropTypes.shape({
        img: PropTypes.string,
        link: PropTypes.string,
    })).isRequired,
};

export default Contributor;
