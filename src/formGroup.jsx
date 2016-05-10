import React from 'react';

import classNames from 'classnames';

import {COMPONENT_CHILDREN} from'./utils';

class FormGroup extends React.Component {
    render() {
        let {children, className, ...otherProps} = this.props;

        className = classNames(['form-group', 'has-feedback'], className);

        return (
            <div className={className} {...otherProps}>
                {children}
            </div>
        );
    }
}

FormGroup.propTypes = {
    children: COMPONENT_CHILDREN,
    className: React.PropTypes.string
};

export default FormGroup;

