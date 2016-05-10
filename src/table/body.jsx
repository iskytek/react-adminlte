import React from 'react';

import {COMPONENT_CHILDREN} from 'components/utils';

class TableBody extends React.Component {
    render() {
        let {children, ...otherProps} = this.props;

        return (
            <tbody {...otherProps}>
                {children}
            </tbody>
        );
    }
}

TableBody.propTypes = {
    children: COMPONENT_CHILDREN
};

export default TableBody;

