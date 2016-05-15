import React from 'react';

import classNames from 'classnames';

import {COMPONENT_CHILDREN} from '../utils';

class Table extends React.Component {
    render() {
        let {
            border,
            children,
            className,
            hover,
            striped,
            ...otherProps
        } = this.props;

        className = classNames(
            'table',
            className,
            {
                'table-bordered': border,
                'table-hover': hover,
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
    hover: React.PropTypes.bool,
    striped: React.PropTypes.bool
};

Table.defaultProps = {
    border: false,
    hover: true,
    striped: true
};

export default Table;

