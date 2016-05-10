import React from 'react';
import ReactDOM from 'react-dom';

import mergeStyles from 'react-merge-styles';

import Button from '../button';

class Examples extends React.Component {
    getStyles() {
        return {
            display: 'flex',
            justifyContent: 'center'
        };
    }

    render() {
        return (
            <div style={this.getStyles()}>
                <ButtonsExample />
            </div>
        );
    }
}

class ExamplePane extends React.Component {
    getStyles() {
        return {
            fieldset: {
                backgroundColor: '#CCC',
                border: '3px dashed #444',
                borderRadius: '8px',
                display: 'inline-block',
                margin: '8px',
                padding: '16px'
            },
            legend: {
                border: 'none',
                fontWeight: 'bold',
                margin: 0,
                padding: '4px',
                width: 'auto'
            }
        };
    }

    render() {
        const {children, style, title, ...otherProps} = this.props;

        const styles = this.getStyles();

        return (
            <fieldset
                style={mergeStyles(styles.fieldset, style)}
                {...otherProps}>
                <legend style={styles.legend}>{title}</legend>
                {children}
            </fieldset>
        );
    }
}

ExamplePane.propTypes = {
    children: React.PropTypes.node,
    style: React.PropTypes.oneOfType([
        React.PropTypes.string,
        React.PropTypes.object
    ]),
    title: React.PropTypes.string.isRequired
};

class ButtonsExample extends React.Component {
    getStyles() {
        return {
            button: {
                margin: '4px'
            }
        };
    }

    render() {
        const styles = this.getStyles();

        return (
            <ExamplePane title="Buttons">
                <Button style={styles.button}>Click me!</Button>
                <Button level="default" style={styles.button}>Default</Button>
                <Button level="primary" style={styles.button}>Primary</Button>
                <Button level="success" style={styles.button}>Success</Button>
                <Button level="info" style={styles.button}>Info</Button>
                <Button level="warning" style={styles.button}>Warning</Button>
                <Button level="danger" style={styles.button}>Danger</Button>
            </ExamplePane>
        );
    }
}

ReactDOM.render(
    <Examples />,
    document.getElementById('example')
);

