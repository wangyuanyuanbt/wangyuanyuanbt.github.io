import React, { Component } from 'react';
import './index.less';
import { message } from 'antd';
import { login } from "../../apis/login";
import {
    setCount,
} from '../../redux/actions'

class index extends Component {
    formRef = React.createRef();
    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            password: "",
        };

    }
    componentDidMount() {
        console.log(this.props);
    }
    inputuserNameChange = (e) => {
        this.setState({
            userName: e.target.value
        })
    }
    inputpasswordChange = (e) => {
        this.setState({
            password: e.target.value
        })
    }
    loginClick = (e) => {
        e.preventDefault()
        this.props.dispatch(setCount(999999999999))
        this.formRef.current.validateFields().then(values => {
            this.loginFn(values)
        })
    }
    async loginFn(values) {
        let res = await login({
            userName: values.userName,
            password: values.password,
            captcha: ""
        });
        if (res.status === 200) {
            message.success('登陆成功！');

            this.props.history.push({
                pathname: `/admin/home`
            })
        } else {
            message.warning(res.msg);
        }
    }

    render() {
        return (
            <div className="login_box fcc">
                <div className="login_main">
                </div>
            </div>
        );
    }
}


export default index;