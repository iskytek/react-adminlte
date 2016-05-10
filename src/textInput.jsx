import React from 'react';

import classNames from 'classnames';

class TextInput extends React.Component {
    render() {
        let {className, ...otherProps} = this.props;

        className = classNames('form-control', className);

        return (
            <input type="text" className={className} {...otherProps} />
        );
    }
}

TextInput.propTypes = {
    className: React.PropTypes.string
};

export default TextInput;

