import React from 'react'
import './index.less';
import Util from "../../utils/utils";
import { Row, Col } from 'antd'
export default class Header extends React.Component {
    state = {
        userName: "",
        sysTime: ""
    }

    componentDidMount() {
        this.setState({
            userName: '春晓'
        })
        let sysTime = Util.formateDate(new Date().getTime());
        this.setState({
            sysTime: sysTime
        })
        setInterval(() => {
            let sysTime = Util.formateDate(new Date().getTime());
            this.setState({
                sysTime: sysTime
            })
        }, 1000)
    }

    render() {
        return (
            <div className="header_box">
                <Row className="breadcrumb">
                    <Col span="4" className="breadcrumb-title">
                        首页
                   </Col>
                    <Col span="20" className="weather">
                        <span className="date">{this.state.sysTime}</span>
                        <span className="weather-detail">晴转多云</span>
                    </Col>
                </Row>
                <Row className="header-top">
                    <Col span="24">
                        <span>欢迎，{this.state.userName}</span>
                        {/* <a href="#">退出</a> */}
                    </Col>
                </Row>

            </div>
        )
    }
}
