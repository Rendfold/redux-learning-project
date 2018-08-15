import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom';
import { createPosts } from '../actions';

class PostsNew extends Component {
    constructor (props) {
        super(props);
    }

    change () {

    }

    renderField (field) {
        const className = `form-group ${field.meta.touched && field.meta.error ? 'has-danger' : ''}`

        return (
            <div className={className}>
                <label>{field.labelText}</label>
                <input
                    className="form-control"
                    type="text"
                    { ...field.input }
                />
                <div className="text-help">
                    { field.meta.touched ? field.meta.error : ''}
                </div>
            </div>
        )
    }

    onSumbit (values) {
        this.props.createPosts(values);
    }

    render() {
        const { handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit((values) => this.onSumbit(values))}>
                <Field 
                    labelText="Title"
                    name="title"
                    component={this.renderField}
                />
                <Field 
                    labelText="Categories"
                    name="categories"
                    component={this.renderField}
                />
                <Field 
                    labelText="Post Content"
                    name="content"
                    component={this.renderField}
                />
                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to="/" className="btn btn-danger">Cancel</Link>
            </form>      
        );
    }
}

function validate (values) {
    const errors = {};

    if (!values.title) {
        errors.title = "Enter a title!";
    }

    if (!values.categories) {
        errors.categories = "Enter a categories!";
    }

    if (!values.content) {
        errors.content = "Enter a post content!";
    }

    return errors;
}

export default reduxForm({
    validate,
    form: 'PostsNewForm'
})(
    connect(null, {createPosts})(PostsNew)
);