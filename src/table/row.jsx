import React from 'react';

import {COMPONENT_CHILDREN} from 'components/utils';

class TableRow extends React.Component {
    render() {
        let {children, ...otherProps} = this.props;

        return (
            <tr {...otherProps}>
                {children}
            </tr>
        );
    }
}

TableRow.propTypes = {
    children: COMPONENT_CHILDREN
};

export default TableRow;

