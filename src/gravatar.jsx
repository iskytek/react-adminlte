import React from 'react';

import md5 from 'js-md5';

const httpUrl = 'http://www.gravatar.com/avatar';
const httpsUrl = 'https://secure.gravatar.com/avatar';

class Gravatar extends React.Component {
    render() {
        const {
            defaultImage,
            email,
            rating,
            secure,
            size,
            ...otherProps
        } = this.props;

        const hash = md5(email);
        let gravatar = secure ? `${httpsUrl}/${hash}` : `${httpUrl}/${hash}`;

        let options = {
            size,
            'default': defaultImage,
            rating
        };

        options = Object.keys(options).reduce((query, key) => {
            const value = options[key];

            if (value) {
                query.push(`${key}=${encodeURIComponent(value)}`);
            }

            return query;
        }, []).join('&');

        if (options) {
            gravatar += '?' + options;
        }

        return (
            <img src={gravatar} {...otherProps} />
        );
    }
}

Gravatar.propTypes = {
    defaultImage: React.PropTypes.string,
    email: React.PropTypes.string.isRequired,
    rating: React.PropTypes.oneOf(['g', 'pg', 'r', 'x']),
    secure: React.PropTypes.bool,
    size: (props, propName, componentName) => {
        const value = props[propName];
        const base =
            `Invalid prop ${propName} supplied to \`${componentName}\`.`;

        if (!Number.isInteger(value)) {
            return new Error(
                `${base} Must be integer.`
            );
        }
        else if (value < 1 || value > 2048) {
            return new Error(
                `${base} Must be between 1 and 2048.`
            );
        }
    }
};

Gravatar.defaultProps = {
    secure: false
};

export default Gravatar;

