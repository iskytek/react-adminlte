import React from 'react';

import classNames from 'classnames';

import {COMPONENT_CHILDREN} from '../utils';

class BoxBody extends React.Component {
    render() {
        let {className, children, ...otherProps} = this.props;

        className = classNames('box-body', className);

        return (
            <div className={className} {...otherProps}>
                {children}
            </div>
        );
    }
}

BoxBody.propTypes = {
    className: React.PropTypes.string,
    children: COMPONENT_CHILDREN
};

export default BoxBody;

