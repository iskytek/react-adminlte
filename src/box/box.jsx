import React from 'react';

import classNames from 'classnames';

import {
    COMPONENT_CHILDREN,
    COMPONENT_LEVELS,
    getComponentLevelClassName
} from '../utils';

class Box extends React.Component {
    render() {
        let {className, children, level, solid, ...otherProps} = this.props;

        className = classNames(
            'box',
            getComponentLevelClassName('box', level),
            {
                'box-solid': solid
            },
            className
        );

        return (
            <div className={className} {...otherProps}>
                {children}
            </div>
        );
    }
}

Box.propTypes = {
    className: React.PropTypes.string,
    children: COMPONENT_CHILDREN,
    level: React.PropTypes.oneOf(COMPONENT_LEVELS),
    solid: React.PropTypes.bool
};

export default Box;

