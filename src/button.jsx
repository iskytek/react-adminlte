import React from 'react';

import classNames from 'classnames';

import {
    COMPONENT_CHILDREN,
    COMPONENT_LEVELS,
    getComponentLevelClassName
} from './utils';

class Button extends React.Component {
    render() {
        let {
            block,
            children,
            className,
            flat,
            href,
            level,
            size,
            ...otherProps
        } = this.props;

        className = classNames(
            'btn',
            getComponentLevelClassName('btn', level),
            {
                'btn-block': block,
                'btn-flat': flat,
                'btn-xs': size === 'extra-small',
                'btn-sm': size === 'small',
                'btn-lg': size === 'large'
            },
            className
        );

        if (href) {
            return this.renderAsAnchor(children, className, href, otherProps);
        }
        else {
            return this.renderAsButton(children, className, otherProps);
        }
    }

    renderAsButton(children, className, otherProps) {
        return (
            <button className={className} {...otherProps}>
                {children}
            </button>
        );
    }

    renderAsAnchor(children, className, href, otherProps) {
        return (
            <a className={className} href={href} {...otherProps}>
                {children}
            </a>
        );
    }
}

Button.propTypes = {
    block: React.PropTypes.bool,
    children: COMPONENT_CHILDREN,
    className: React.PropTypes.string,
    flat: React.PropTypes.bool,
    href: React.PropTypes.string,
    level: React.PropTypes.oneOf(COMPONENT_LEVELS),
    size: React.PropTypes.oneOf(['extra-small', 'small', 'large'])
};

Button.defaultProps = {
    block: false,
    flat: false
};

export default Button;

