import React, { Component } from 'react';
import { connect } from 'react-redux';

class PostsNew extends Component {
    constructor (props) {
        super(props);
    }

    componentDidMount () {

    }

    render() {
        return (
            <div>
                Hello
            </div>        
        );
    }
}

function mapStateToProps (state) {
    return { }
}

export default connect(mapStateToProps, null)(PostsNew);