import React from 'react';

import classNames from 'classnames';

import {COMPONENT_CHILDREN} from '../utils';

class ListGroupItemHeading extends React.Component {
    render() {
        let {children, className, ...otherProps} = this.props;

        className = classNames('list-group-item-heading', className);

        return (
            <h4 className={className} {...otherProps}>
                {children}
            </h4>
        );
    }
}

ListGroupItemHeading.propTypes = {
    children: COMPONENT_CHILDREN,
    className: React.PropTypes.string
};

export default ListGroupItemHeading;

