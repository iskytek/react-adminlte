import React from 'react';

export const COMPONENT_CHILDREN = React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.node
]);

export const COMPONENT_LEVELS = [
    'default',
    'primary',
    'success',
    'info',
    'warning',
    'danger'
];

export function getComponentLevelClassName(prefix, level) {
    if (COMPONENT_LEVELS.indexOf(level) === -1) {
        return '';
    }

    return `${prefix}-${level}`;
}

