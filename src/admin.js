
import './admin.css';
import { Row, Col } from 'antd'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import NavLeft from '@/components/NavLeft'

import '@/style/admin.less'

import React, { Component } from 'react';

class Admin extends Component {
  render() {
    return (
      <Row className="App_Box">
        <Col span="3" className="nav_left">
          <NavLeft />
        </Col>
        <Col span="21" className="main_box">
          <Header />
          <Row className="main_db">
            {this.props.children}
          </Row>
          <Footer />
        </Col>
      </Row>
    );
  }
}

export default Admin;
