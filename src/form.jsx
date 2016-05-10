import React from 'react';
import ReactDOM from 'react-dom';

import {COMPONENT_CHILDREN} from './utils';

class Form extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            formData: {}
        };
    }

    componentDidMount() {
        this.state = {formData: this.getFormData()};
    }

    getFormData() {
        const domNode = ReactDOM.findDOMNode(this);

        let formControls = Array.prototype.slice.call(
            domNode.querySelectorAll('[name]')
        );

        return formControls.reduce((state, child) => {
            const name = child.getAttribute('name');

            state[name] = child.value;

            return state;
        }, {});
    }

    onSubmit(event) {
        event.preventDefault();

        let {onSubmit} = this.props;

        if (onSubmit) {
            onSubmit(this.state.formData);
        }
    }

    onChange() {
        this.setState({formData: this.getFormData()});
    }

    render() {
        /* eslint no-unused-vars: 0 */
        let {children, onSubmit, ...otherProps} = this.props;

        return (
            <form
                onChange={this.onChange.bind(this)}
                onSubmit={this.onSubmit.bind(this)}
                {...otherProps}>
                {children}
            </form>
        );
    }
}

Form.propTypes = {
    children: COMPONENT_CHILDREN,
    onSubmit: React.PropTypes.func
};

export default Form;

