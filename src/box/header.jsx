import React from 'react';

import classNames from 'classnames';

import {COMPONENT_CHILDREN} from '../utils';

class BoxHeader extends React.Component {
    render() {
        let {
            border,
            className,
            children,
            pull,
            title,
            ...otherProps
        } = this.props;

        className = classNames('box-header', className, {border});

        const boxToolsClassName = classNames('box-tools', {
            'pull-left': pull === 'left',
            'pull-right': pull === 'right'
        });

        return (
            <div className={className} {...otherProps}>
                <h3 className="box-title">{title}</h3>
                <div className={boxToolsClassName}>
                    {children}
                </div>
            </div>
        );
    }
}

BoxHeader.propTypes = {
    border: React.PropTypes.bool,
    className: React.PropTypes.string,
    children: COMPONENT_CHILDREN,
    pull: React.PropTypes.oneOf(['left', 'right']),
    title: React.PropTypes.string
};

BoxHeader.defaultProps = {
    border: false
};

export default BoxHeader;

