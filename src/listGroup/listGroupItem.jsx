import React from 'react';

import classNames from 'classNames';

import {
    COMPONENT_CHILDREN,
    COMPONENT_LEVELS,
    getComponentLevelClassName
} from '../utils';

class ListGroupItem extends React.Component {
    render() {
        let {
            active,
            children,
            className,
            disabled,
            level,
            ...otherProps
        } = this.props;

        className = classNames(
            'list-group-item',
            getComponentLevelClassName('list-group-item', level),
            {
                active,
                disabled
            },
            className
        );

        return (
            <li className={className} {...otherProps}>
                {children}
            </li>
        );
    }
}

ListGroupItem.propTypes = {
    active: React.PropTypes.bool,
    children: COMPONENT_CHILDREN,
    className: React.PropTypes.string,
    disabled: React.PropTypes.bool,
    level: React.PropTypes.oneOf(COMPONENT_LEVELS)
};

ListGroupItem.defaultProps = {
    active: false,
    disabled: false
};

export default ListGroupItem;

