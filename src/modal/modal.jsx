import React from 'react';

import classNames from 'classnames';

import {
    COMPONENT_CHILDREN,
    COMPONENT_LEVELS,
    getComponentLevelClassName
} from '../utils';

class Modal extends React.Component {
    render() {
        let {
            children,
            className,
            level,
            open,
            onClose,
            size,
            title,
            ...otherProps
        } = this.props;

        className = classNames(
            'modal',
            getComponentLevelClassName('modal', level),
            className
        );

        const dialogClassName = classNames('modal-dialog', {
            'modal-sm': size === 'small',
            'modal-lg': size === 'large'
        });

        const styles = {};

        if (open) {
            styles.display = 'block';
        }

        return (
            <div
                className={className}
                style={styles}
                role="dialog"
                {...otherProps}>
                <div className={dialogClassName} role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-label="Close"
                                onClick={onClose}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                            <h4 className="modal-title">{title}</h4>
                        </div>
                        {children}
                    </div>
                </div>
            </div>
        );
    }
}

Modal.propTypes = {
    children: COMPONENT_CHILDREN,
    className: React.PropTypes.string,
    level: React.PropTypes.oneOf(COMPONENT_LEVELS),
    onClose: React.PropTypes.func,
    open: React.PropTypes.bool,
    size: React.PropTypes.oneOf(['small', 'large']),
    title: React.PropTypes.string
};

Modal.defaultProps = {
    open: false
};

export default Modal;

