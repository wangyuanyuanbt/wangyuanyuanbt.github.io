import React, { Component } from 'react';
import { connect } from 'react-redux';
class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            account: "",
            pwd: "",
        };
    }
    componentDidMount() {
    }

    
    render() {
        return (
            <div>
                {this.props.tiger}1231233
            </div>
        );
    }
}

//需要渲染什么数据
function mapStateToProps(state) {
    return {
        tiger: state.count
    }
}


export default index = connect(mapStateToProps)(index);