import React from 'react';

import {COMPONENT_CHILDREN} from '../utils';

class TableHeader extends React.Component {
    render() {
        let {children, ...otherProps} = this.props;

        return (
            <thead {...otherProps}>
                {children}
            </thead>
        );
    }
}

TableHeader.propTypes = {
    children: COMPONENT_CHILDREN
};

export default TableHeader;

