import React from 'react';

import classNames from 'classnames';

import {COMPONENT_CHILDREN} from 'components/utils';

class ModalBody extends React.Component {
    render() {
        let {children, className, ...otherProps} = this.props;

        className = classNames('modal-body', className);

        return (
            <div className={className} {...otherProps}>
                {children}
            </div>
        );
    }
}

ModalBody.propTypes = {
    children: COMPONENT_CHILDREN,
    className: React.PropTypes.string
};

export default ModalBody;

