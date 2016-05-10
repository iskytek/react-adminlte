import React from 'react';

import classNames from 'classnames';

import {COMPONENT_CHILDREN} from 'components/utils';

class ModalFooter extends React.Component {
    render() {
        let {children, className, ...otherProps} = this.props;

        className = classNames('modal-footer', className);

        return (
            <div className={className} {...otherProps}>
                {children}
            </div>
        );
    }
}

ModalFooter.propTypes = {
    children: COMPONENT_CHILDREN,
    className: React.PropTypes.string
};

export default ModalFooter;

