import React from 'react';

import classNames from 'classnames';

class Glyphicon extends React.Component {
    render() {
        let {className, icon, ...otherProps} = this.props;

        className = classNames(['glyphicon', 'glyphicon-' + icon], className);

        return (
            <span className={className} {...otherProps}></span>
        );
    }
}

Glyphicon.propTypes = {
    className: React.PropTypes.string,
    icon: React.PropTypes.string.isRequired
};

export default Glyphicon;

