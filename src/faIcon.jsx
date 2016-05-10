import React from 'react';

import classNames from 'classnames';

class FAIcon extends React.Component {
    render() {
        let {
            animation,
            border,
            className,
            fixedWidth,
            icon,
            pull,
            rotate,
            size,
            ...otherProps
        } = this.props;

        className = classNames(
            ['fa', `fa-${icon}`],
            animation ? `fa-${animation}` : '',
            {
                'fa-border': border,
                'fa-fw': fixedWidth,
                'fa-pull-left': pull === 'left',
                'fa-pull-right': pull === 'right',
                'fa-rotate-90': rotate === '90',
                'fa-rotate-180': rotate === '180',
                'fa-rotate-270': rotate === '270',
                'fa-rotate-horizontal': rotate === 'horizontal',
                'fa-rotate-vertical': rotate === 'vertical',
                'fa-lg': size === 'lg',
                'fa-2x': size === '2x',
                'fa-3x': size === '3x',
                'fa-4x': size === '4x',
                'fa-5x': size === '5x'
            },
            className
        );

        return (
            <i className={className} {...otherProps}></i>
        );
    }
}

FAIcon.propTypes = {
    animation: React.PropTypes.oneOf(['pulse', 'spin']),
    border: React.PropTypes.bool,
    className: React.PropTypes.string,
    fixedWidth: React.PropTypes.bool,
    icon: React.PropTypes.string.isRequired,
    pull: React.PropTypes.oneOf(['left', 'right']),
    rotate: React.PropTypes.oneOf([
        '90',
        '180',
        '270',
        'horizontal',
        'vertical'
    ]),
    size: React.PropTypes.oneOf([
        'lg',
        '2x',
        '3x',
        '4x',
        '5x'
    ])
};

FAIcon.defaultProps = {
    border: false,
    fixedWidth: false
};

export default FAIcon;

