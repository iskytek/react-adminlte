import React from 'react';

import {COMPONENT_CHILDREN} from 'components/utils';

class TableHeader extends React.Component {
    render() {
        let {children, ...otherProps} = this.props;

        return (
            <th {...otherProps}>
                {children}
            </th>
        );
    }
}

TableHeader.propTypes = {
    children: COMPONENT_CHILDREN
};

export default TableHeader;

