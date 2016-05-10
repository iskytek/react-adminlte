import React from 'react';

import classNames from 'classnames';

import {COMPONENT_CHILDREN} from '../utils';

class BoxFooter extends React.Component {
    render() {
        let {className, children, ...otherProps} = this.props;

        className = classNames('box-footer', className);

        return (
            <div className={className} {...otherProps}>
                {children}
            </div>
        );
    }
}

BoxFooter.propTypes = {
    className: React.PropTypes.string,
    children: COMPONENT_CHILDREN
};

export default BoxFooter;

