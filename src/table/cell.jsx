import React from 'react';

import {COMPONENT_CHILDREN} from 'components/utils';

class TableCell extends React.Component {
    render() {
        let {children, ...otherProps} = this.props;

        return (
            <td {...otherProps}>
                {children}
            </td>
        );
    }
}

TableCell.propTypes = {
    children: COMPONENT_CHILDREN
};

export default TableCell;

