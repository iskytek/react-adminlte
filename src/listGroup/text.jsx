import React from 'react';

import classNames from 'classnames';

import {COMPONENT_CHILDREN} from '../utils';

class ListItemGroupText extends React.Component {
    render() {
        let {children, className, ...otherProps} = this.props;

        className = classNames('list-group-item-heading', className);

        return (
            <p className={className} {...otherProps}>
                {children}
            </p>
        );
    }
}

ListItemGroupText.propTypes = {
    children: COMPONENT_CHILDREN,
    className: React.PropTypes.string
};

export default ListItemGroupText;

