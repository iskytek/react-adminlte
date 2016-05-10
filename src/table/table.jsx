import React from 'react';

import classNames from 'classnames';

import {COMPONENT_CHILDREN} from 'components/utils';

class Table extends React.Component {
    render() {
        let {border, children, className, striped, ...otherProps} = this.props;

        className = classNames(
            'table',
            className,
            {
                'table-bordered': border,
                'table-striped': striped
            }
        );

        return (
            <table className={className} {...otherProps}>
                {children}
            </table>
        );
    }
}

Table.propTypes = {
    border: React.PropTypes.bool,
    children: COMPONENT_CHILDREN,
    className: React.PropTypes.string,
    striped: React.PropTypes.bool
};

Table.defaultProps = {
    border: false,
    striped: false
};

export default Table;

