import React from 'react';

import classNames from 'classnames';

import {COMPONENT_CHILDREN} from '../utils';

class ListGroup extends React.Component {
    render() {
        let {children, className, ...otherProps} = this.props;

        className = classNames('list-group', className);

        return (
            <ul className={className} {...otherProps}>
                {children}
            </ul>
        );
    }
}

ListGroup.propTypes = {
    children: COMPONENT_CHILDREN,
    className: React.PropTypes.string
};

export default ListGroup;

