import React from 'react';

import classNames from 'classnames';
import mergeStyles from 'react-merge-styles';

import FAIcon from 'components/faIcon';

class Overlay extends React.Component {
    getStyles() {
        return {
            overlay: {
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                zIndex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }
        };
    }

    render() {
        let {className, style, visible, ...otherProps} = this.props;

        className = classNames('overlay', className);

        const styles = this.getStyles();
        styles.overlay.display = visible ? 'block' : 'none';

        return (
            <div
                className={className}
                style={mergeStyles(styles.overlay, style)}
                {...otherProps}>
                <FAIcon icon="spinner" animation="pulse" />
            </div>
        );
    }
}

Overlay.propTypes = {
    className: React.PropTypes.string,
    style: React.PropTypes.object,
    visible: React.PropTypes.bool
};

Overlay.defaultProps = {
    visible: false
};

export default Overlay;

